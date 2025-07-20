using Microsoft.Extensions.Diagnostics.HealthChecks;
using Otus.Highload.Counter.Services;
using StackExchange.Redis;

var builder = WebApplication.CreateBuilder(args);
var configuration = builder.Configuration;
builder.Services.AddHealthChecks().AddCheck("default", () => HealthCheckResult.Healthy());
// Add services to the container.
builder.Services.AddGrpc();

builder.Services.AddSingleton<IConnectionMultiplexer>(cfg => ConnectionMultiplexer.Connect(configuration.GetConnectionString("Redis")!));
builder.Services.AddScoped(cfg => cfg.GetRequiredService<IConnectionMultiplexer>().GetDatabase());

var app = builder.Build();

// Configure the HTTP request pipeline.
app.MapGrpcService<CounterService>();
app.MapGet("/", () => "Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");

app.Run();
