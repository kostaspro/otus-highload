// See https://aka.ms/new-console-template for more information

using System.Net.Http.Json;
using System.Net.WebSockets;
using System.Text;
using Microsoft.Extensions.Configuration;

var builder = new ConfigurationBuilder()
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables();

var configuration = builder.Build();

Console.WriteLine("Press :q for exit ...");
Console.WriteLine();

var cs = new CancellationTokenSource();

SubscribeAsync(cs.Token, configuration);

string? message;
do
{
    message = Console.ReadLine();
} while (message != ":q");

await cs.CancelAsync();
await Task.Delay(500);


async Task SubscribeAsync(CancellationToken cancellationToken, IConfiguration configuration)
{
   // var token =
     //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIwMDAwMWM3NS1lYTA3LTRhOGItYjlhNy1mYTQ4MTRhNWY0ZTMiLCJuYmYiOjE3NDMyNDE2MDAsImV4cCI6MTc0Mzg0NjQwMCwiaWF0IjoxNzQzMjQxNjAwfQ.PCzTuai-EzaheC3JbJ0K38HIasXLHrSQMfC3w7HhKNQ";



    using var handler = new HttpClientHandler();
    handler.ServerCertificateCustomValidationCallback = HttpClientHandler.DangerousAcceptAnyServerCertificateValidator;

    HttpMessageInvoker invoker = new(handler);

    using var ws = new ClientWebSocket();

    var tryConnect = 1;
    var server = configuration.GetConnectionString("Server").Split(":");
    var loginUri = new UriBuilder(Uri.UriSchemeHttp, server[0], int.Parse(server[1]), "/login").Uri;
    var wsUri = new UriBuilder(Uri.UriSchemeWs, server[0], int.Parse(server[1]), "/post/feed/posted").Uri;
    var user = configuration["User"];

    while (!cancellationToken.IsCancellationRequested && ws.State != WebSocketState.Open)
    {
        try
        {
            Console.WriteLine($"Try client connecting [{tryConnect}]");

            var res = await new HttpClient(handler).PostAsJsonAsync(loginUri,new LoginRequest
            {
                id = user,
                password = "string"
            }, cancellationToken);
            var lr = await res.Content.ReadFromJsonAsync<LoginResult>();
            ws.Options.SetRequestHeader("Authorization", $"Bearer {lr.token}");

            await ws.ConnectAsync(wsUri, invoker, cancellationToken);

            Console.WriteLine("Client connected");
        }
        catch (Exception e)
        {
            await Task.Delay(1000);
            tryConnect++;
        }
    }

    cancellationToken.Register(() =>
    {
        ws.CloseAsync(WebSocketCloseStatus.NormalClosure, "Client closed", CancellationToken.None);
        Console.WriteLine("Client disconnected");
    });

    var buffer = new byte[1024 * 4];
    var receiveResult = await ws.ReceiveAsync(buffer, CancellationToken.None);

    while (!receiveResult.CloseStatus.HasValue)
    {
        string res = Encoding.UTF8.GetString(buffer, 0, buffer.Length);

        Console.WriteLine("Received post:");
        Console.WriteLine(res);

        receiveResult = await ws.ReceiveAsync(
            new ArraySegment<byte>(buffer), CancellationToken.None);
    }
}

public class LoginResult
{
    public string token { get; set; }
}

public class LoginRequest
{
    public string id { get; set; }
    public string password { get; set; }
}

