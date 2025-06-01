# Описание

В минимальной реализации бизнес-домен диалогов перенесен в отдельный сервис, для поддержки обратной совместимости взаимодействие реализовано через REST API, в качестве x-request-id передается https://learn.microsoft.com/ru-ru/dotnet/api/microsoft.aspnetcore.http.httpcontext.traceidentifier?view=aspnetcore-8.0


Адреса сервисов
  
- API http://localhost:5000/swagger/index.html
- Dialogs API http://localhost:5001/swagger/index.html
- RabbitMQ http://localhost:15672  (highload/password)
- Postresql localhost:6543  (highload/password)
- Hangfire http://localhost:5000/hangfire

Авторизация:
<details>
<summary>Пользователь 1</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00001c75-ea07-4a8b-b9a7-fa4814a5f4e3",
  "password": "string"
}'</code>
</details>

<details>
<summary>Пользователь 2</summary>
<code>curl -X 'POST' \
  'http://localhost:5000/login' \
  -H 'accept: text/plain' \
  -H 'Content-Type: application/json-patch+json' \
  -d '{
  "id": "00001fa9-9063-4c4c-ac67-df5e409ba626",
  "password": "string"
}'</code>
</details>

Далее в методах отправки сообщения и получения диалога с пользователем используем этот токен

Реализован функционал:

- Взаимодействия монолитного сервиса и сервиса чатов реализовать на REST API
- Организовано сквозное логирование запросов (x-request-id)
- Сохранена обратной совместимость для API

# Запуск
Выполнить

<code>docker-compose --profile postgres up -d</code>

Надо дождаться когда отработает data-loader-1 (это загрузка данных в таблицы)

Далее авторизуемся и отправляем сообщения под пользователем <strong>Пользователь 1</strong> <strong>Пользователю 2</strong>

Через метод получения диалогов получаем данные

# Проверка сквозного логирования запросов (x-request-id)

Имитируем сбой в сервисе диалогов (например останавливаем редис)

<code>docker-compose --profile postgres stop redis</code>

<details>
<summary>Логи API</summary>
<code>fail: Microsoft.AspNetCore.Server.Kestrel[13]
      Connection id "0HND0SGR3T5SP", Request id <b>"0HND0SGR3T5SP:00000001"</b>b>: An unhandled exception was thrown by the application.
      System.Net.Http.HttpRequestException: Response status code does not indicate success: 500 (Internal Server Error).
         at System.Net.Http.HttpResponseMessage.EnsureSuccessStatusCode()
         at System.Net.Http.Json.HttpClientJsonExtensions.<FromJsonAsyncCore>g__Core|12_0[TValue,TJsonOptions](HttpClient client, Task`1 responseTask, Boolean usingResponseHeadersRead, CancellationTokenSource linkedCTS, Func`4 deserializeMethod, TJsonOptions jsonOptions, CancellationToken cancellationToken)
         at Otus.Highload.Controllers.DialogApiClient.ListAsync(String userId) in /src/src/Otus.Highload.Api/Controllers/DialogApiClient.cs:line 20
         at Otus.Highload.Controllers.DialogApiController.List(String userId) in /src/src/Otus.Highload.Api/Controllers/DialogApi.cs:line 80
         at Microsoft.AspNetCore.Mvc.Infrastructure.ActionMethodExecutor.TaskOfIActionResultExecutor.Execute(ActionContext actionContext, IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.<InvokeActionMethodAsync>g__Awaited|12_0(ControllerActionInvoker invoker, ValueTask`1 actionResultValueTask)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.<InvokeNextActionFilterAsync>g__Awaited|10_0(ControllerActionInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Rethrow(ActionExecutedContextSealed context)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.<InvokeInnerFilterAsync>g__Awaited|13_0(ControllerActionInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeNextResourceFilter>g__Awaited|25_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Rethrow(ResourceExecutedContextSealed context)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeFilterPipelineAsync>g__Awaited|20_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeAsync>g__Logged|17_1(ResourceInvoker invoker)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeAsync>g__Logged|17_1(ResourceInvoker invoker)
         at Microsoft.AspNetCore.Routing.EndpointMiddleware.<Invoke>g__AwaitRequestTask|7_0(Endpoint endpoint, Task requestTask, ILogger logger)
         at Swashbuckle.AspNetCore.SwaggerUI.SwaggerUIMiddleware.Invoke(HttpContext httpContext)
         at Swashbuckle.AspNetCore.Swagger.SwaggerMiddleware.Invoke(HttpContext httpContext, ISwaggerProvider swaggerProvider)
         at Microsoft.AspNetCore.Authorization.AuthorizationMiddleware.Invoke(HttpContext context)
         at Microsoft.AspNetCore.Authentication.AuthenticationMiddleware.Invoke(HttpContext context)
         at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http.HttpProtocol.ProcessRequests[TContext](IHttpApplication`1 application)
info: Microsoft.AspNetCore.Hosting.Diagnostics[2]
      Request finished HTTP/1.1 GET http://localhost:5000/dialog/375406da-938c-41d3-beff-6cb02462fd97/list - 500 0 - 5007.4617ms</code>
</details>

<details>
<summary>Логи Dialogs API</summary>
<code>info: Microsoft.AspNetCore.Hosting.Diagnostics[1]
      Request starting HTTP/1.1 GET http://api-dialogs/dialog/375406da-938c-41d3-beff-6cb02462fd97/list - - -
info: Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware[1]
      Request:
      Protocol: HTTP/1.1
      Method: GET
      Scheme: http
      PathBase: 
      Path: /dialog/375406da-938c-41d3-beff-6cb02462fd97/list
      Host: api-dialogs
      Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI4M2ViZDI5Yy00YzIwLTQxZmMtOTRjYi0zNzg5Y2VkMjkwYTYiLCJuYmYiOjE3NDg3NTg2ODIsImV4cCI6MTc0OTM2MzQ4MiwiaWF0IjoxNzQ4NzU4NjgyfQ.m0dyZJdRcTCHCxoaxk9jifF3tk2_d_oMlgDDkeVPlsw
      traceparent: [Redacted]
      X-Request-ID: <b>0HND0SGR3T5SP:00000001</b>
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[0]
      Executing endpoint 'Otus.Highload.Dialogs.Controllers.DialogApiController.ListAsync (Otus.Highload.Dialogs.Api)'
info: Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker[102]
      Route matched with {action = "List", controller = "DialogApi"}. Executing controller action with signature System.Threading.Tasks.Task`1[System.Collections.Generic.List`1[Otus.Highload.Dialogs.Api.Contracts.Models.DialogMessage]] ListAsync(System.String) on controller Otus.Highload.Dialogs.Controllers.DialogApiController (Otus.Highload.Dialogs.Api).
info: Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker[105]
      Executed action Otus.Highload.Dialogs.Controllers.DialogApiController.ListAsync (Otus.Highload.Dialogs.Api) in 5000.9058ms
info: Microsoft.AspNetCore.Routing.EndpointMiddleware[1]
      Executed endpoint 'Otus.Highload.Dialogs.Controllers.DialogApiController.ListAsync (Otus.Highload.Dialogs.Api)'
info: Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware[2]
      Response:
      StatusCode: 200
fail: Microsoft.AspNetCore.Server.Kestrel[13]
      Connection id "0HND0SH9U812C", Request id "0HND0SH9U812C:00000001": An unhandled exception was thrown by the application.
      StackExchange.Redis.RedisConnectionException: The message timed out in the backlog attempting to send because no connection became available (5000ms) - Last Connection Exception: SocketClosed (ReadEndOfStream, last-recv: 0) on host.docker.internal:6379/Interactive, Idle/MarkProcessed, last: INFO, origin: ReadFromPipe, outstanding: 0, last-read: 0s ago, last-write: 29s ago, keep-alive: 60s, state: ConnectedEstablished, mgr: 8 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.6.122.38350, command=UNKNOWN, timeout: 5000, inst: 0, qu: 1, qs: 0, aw: False, bw: SpinningDown, last-in: 0, cur-in: 0, sync-ops: 6, async-ops: 0, serverEndpoint: host.docker.internal:6379, conn-sec: n/a, aoc: 1, mc: 1/1/0, mgr: 10 of 10 available, clientName: 117c62ed1afd(SE.Redis-v2.6.122.38350), IOCP: (Busy=0,Free=1000,Min=1,Max=1000), WORKER: (Busy=1,Free=32766,Min=28,Max=32767), POOL: (Threads=5,QueuedItems=0,CompletedItems=1382,Timers=11), v: 2.6.122.38350 (Please take a look at this article for some common client-side issues that can cause timeouts: https://stackexchange.github.io/StackExchange.Redis/Timeouts)
       ---> StackExchange.Redis.RedisConnectionException: SocketClosed (ReadEndOfStream, last-recv: 0) on host.docker.internal:6379/Interactive, Idle/MarkProcessed, last: INFO, origin: ReadFromPipe, outstanding: 0, last-read: 0s ago, last-write: 29s ago, keep-alive: 60s, state: ConnectedEstablished, mgr: 8 of 10 available, in: 0, in-pipe: 0, out-pipe: 0, last-heartbeat: 0s ago, last-mbeat: 0s ago, global: 0s ago, v: 2.6.122.38350
         --- End of inner exception stack trace ---
         at StackExchange.Redis.ConnectionMultiplexer.ExecuteSyncImpl[T](Message message, ResultProcessor`1 processor, ServerEndPoint server, T defaultValue) in /_/src/StackExchange.Redis/ConnectionMultiplexer.cs:line 2093
         at StackExchange.Redis.RedisBase.ExecuteSync[T](Message message, ResultProcessor`1 processor, ServerEndPoint server, T defaultValue) in /_/src/StackExchange.Redis/RedisBase.cs:line 62
         at StackExchange.Redis.RedisDatabase.Execute(String command, ICollection`1 args, CommandFlags flags) in /_/src/StackExchange.Redis/RedisDatabase.cs:line 1502
         at StackExchange.Redis.RedisDatabase.Execute(String command, Object[] args) in /_/src/StackExchange.Redis/RedisDatabase.cs:line 1497
         at Otus.Highload.Dialogs.Controllers.DialogApiController.ListAsync(String userId) in /src/src/Otus.Highload.Dialogs.Api/Controllers/DialogApi.cs:line 82
         at lambda_method5(Closure, Object)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ActionMethodExecutor.AwaitableObjectResultExecutor.Execute(ActionContext actionContext, IActionResultTypeMapper mapper, ObjectMethodExecutor executor, Object controller, Object[] arguments)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.<InvokeActionMethodAsync>g__Awaited|12_0(ControllerActionInvoker invoker, ValueTask`1 actionResultValueTask)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.<InvokeNextActionFilterAsync>g__Awaited|10_0(ControllerActionInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Rethrow(ActionExecutedContextSealed context)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ControllerActionInvoker.InvokeInnerFilterAsync()
      --- End of stack trace from previous location ---
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeNextResourceFilter>g__Awaited|25_0(ResourceInvoker invoker, Task lastTask, State next, Scope scope, Object state, Boolean isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Rethrow(ResourceExecutedContextSealed context)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.Next(State& next, Scope& scope, Object& state, Boolean& isCompleted)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.InvokeFilterPipelineAsync()
      --- End of stack trace from previous location ---
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeAsync>g__Logged|17_1(ResourceInvoker invoker)
         at Microsoft.AspNetCore.Mvc.Infrastructure.ResourceInvoker.<InvokeAsync>g__Logged|17_1(ResourceInvoker invoker)
         at Microsoft.AspNetCore.Routing.EndpointMiddleware.<Invoke>g__AwaitRequestTask|7_0(Endpoint endpoint, Task requestTask, ILogger logger)
         at Swashbuckle.AspNetCore.SwaggerUI.SwaggerUIMiddleware.Invoke(HttpContext httpContext)
         at Swashbuckle.AspNetCore.Swagger.SwaggerMiddleware.Invoke(HttpContext httpContext, ISwaggerProvider swaggerProvider)
         at Microsoft.AspNetCore.Authorization.AuthorizationMiddleware.Invoke(HttpContext context)
         at Microsoft.AspNetCore.Authentication.AuthenticationMiddleware.Invoke(HttpContext context)
         at Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware.InvokeInternal(HttpContext context, HttpLoggingOptions options, HttpLoggingAttribute loggingAttribute, HttpLoggingFields loggingFields)
         at Microsoft.AspNetCore.HttpLogging.HttpLoggingMiddleware.InvokeInternal(HttpContext context, HttpLoggingOptions options, HttpLoggingAttribute loggingAttribute, HttpLoggingFields loggingFields)
         at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Http.HttpProtocol.ProcessRequests[TContext](IHttpApplication`1 application)
info: Microsoft.AspNetCore.Hosting.Diagnostics[2]
      Request finished HTTP/1.1 GET http://api-dialogs/dialog/375406da-938c-41d3-beff-6cb02462fd97/list - 500 0 - 5003.1793ms</code>
</details>
