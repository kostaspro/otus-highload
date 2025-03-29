using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net.WebSockets;
using System.Threading;
using System;
using System.Threading.Tasks;
using Otus.Highload.Extensions;
using EasyNetQ;
using Hangfire;
using Microsoft.Extensions.DependencyInjection;
using Otus.Highload.Models;

namespace Otus.Highload.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    [Authorize]
    public class PostWebSocketController : ControllerBase
    {
        private readonly IBus _bus;
        private readonly IServiceProvider _serviceProvider;

        public static string GetTopic(string userId) => $"post.feed.posted.{userId}";

        public PostWebSocketController(IBus bus, IServiceProvider serviceProvider)
        {
            _bus = bus;
            _serviceProvider = serviceProvider;
        }

        [Route("/post/feed/posted")]
        [HttpGet]
        public async Task Get()
        {
            if (HttpContext.WebSockets.IsWebSocketRequest)
            {
                var userId = User.GetUserId();

                using var webSocket = await HttpContext.WebSockets.AcceptWebSocketAsync();

                await ProcessAsync(webSocket, userId);
            }
            else
            {
                HttpContext.Response.StatusCode = StatusCodes.Status400BadRequest;
            }
        }

        private async Task ProcessAsync(WebSocket webSocket, Guid userId)
        {
            var connectionId = Guid.NewGuid().ToString();
            var buffer = new byte[1024 * 4];

            var subscription = _bus.PubSub.SubscribeAsync<PostedPost>(connectionId, async (post, cancellationToken) =>
                {
                    if (cancellationToken.IsCancellationRequested)
                    {
                        return;
                    }

                    var backgroundJob = _serviceProvider.GetRequiredService<IBackgroundJobClient>();
                    backgroundJob.Enqueue<FeedManager>(x => x.UpdateAsync(new Post
                    {
                        Text = post.PostText,
                        AuthorUserId = post.UserId,
                        Id = post.PostId
                    }, userId, false));

                    await webSocket.SendAsync(
                        new ArraySegment<byte>(System.Text.Json.JsonSerializer.SerializeToUtf8Bytes(post)),
                        WebSocketMessageType.Binary, true,
                        cancellationToken);

                },
                x => x.WithAutoDelete().WithDurable(false).WithTopic(GetTopic(userId.ToString())));
            var wsException = false;
            WebSocketReceiveResult receiveResult = null;
            try
            {
                receiveResult = await webSocket.ReceiveAsync(
                    new ArraySegment<byte>(buffer), CancellationToken.None);
                while (!receiveResult.CloseStatus.HasValue)
                {
                    receiveResult = await webSocket.ReceiveAsync(
                        new ArraySegment<byte>(buffer), CancellationToken.None);
                }
            }
            catch (WebSocketException)
            {
                wsException = true;
            }

            (await subscription).Dispose();

            if (!wsException)
            {
                await webSocket.CloseAsync(
                    receiveResult.CloseStatus.Value,
                    receiveResult.CloseStatusDescription,
                    CancellationToken.None);
            }
        }
    }
}
