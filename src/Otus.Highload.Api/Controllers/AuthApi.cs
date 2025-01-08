using Microsoft.AspNetCore.Mvc;
using Otus.Highload.Attributes;
using Otus.Highload.Models;
using Otus.Highload.Users;
using Swashbuckle.AspNetCore.Annotations;

namespace Otus.Highload.Controllers
{
    [ApiController]
    public class AuthApiController : ControllerBase
    {
        private readonly LoginManager _loginManager;

        public AuthApiController(LoginManager loginManager)
        {
            _loginManager = loginManager;
        }
        /// <summary>
        /// Упрощенный процесс аутентификации путем передачи идентификатор пользователя и получения токена для дальнейшего прохождения авторизации
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">Успешная аутентификация</response>
        /// <response code="400">Невалидные данные</response>
        /// <response code="404">Пользователь не найден</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPost]
        [Route("/login")]
        [ValidateModelState]
        [SwaggerOperation("LoginPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(AuthResponse), description: "Успешная аутентификация")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Login([FromBody] LoginBody body)
        {
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(AuthResponse));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(404);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            var token = _loginManager.Auth(body.Id, body.Password);
            var result = new AuthResponse { Token = token };

            return new ObjectResult(result);
        }
    }
}
