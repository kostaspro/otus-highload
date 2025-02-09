using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Otus.Highload.Attributes;
using Otus.Highload.Models;
using Otus.Highload.Users;
using Swashbuckle.AspNetCore.Annotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace Otus.Highload.Controllers
{
    [ApiController]
    public class UserApiController : ControllerBase
    {
        private readonly UserManager _userManager;
        private readonly IRepository _repository;

        public UserApiController(UserManager userManager, IRepository repository)
        {
            _userManager = userManager;
            _repository = repository;
        }
        /// <summary>
        /// Регистрация нового пользователя
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">Успешная регистрация</response>
        /// <response code="400">Невалидные данные</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPost]
        [Route("/user/register")]
        [ValidateModelState]
        [SwaggerOperation("UserRegisterPost")]
        [SwaggerResponse(statusCode: 200, type: typeof(RegisterResponse), description: "Успешная регистрация")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Register([FromBody] UserRegisterBody body)
        {
            var userId = _userManager.Register(body.FirstName, body.SecondName, body.Birthdate, body.Biography, body.City, body.Password);

            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(RegisterResponse));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            var result = new RegisterResponse { UserId = userId.ToString() };

            return new ObjectResult(result);
        }

        /// <summary>
        /// Получение анкеты пользователя
        /// </summary>
        /// <param name="id">Идентификатор пользователя</param>
        /// <response code="200">Успешное получение анкеты пользователя</response>
        /// <response code="400">Невалидные данные</response>
        /// <response code="404">Анкета не найдена</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpGet]
        [Route("/user/get/{id}")]
        [Authorize]
        [ValidateModelState]
        [SwaggerOperation("UserGetIdGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(User), description: "Успешное получение анкеты пользователя")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Get([FromRoute][Required] string id)
        {
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(User));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 404 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(404);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            const string sql = @"SELECT * FROM users WHERE id = @p0";
            var result = _repository.Query<UserEntity>(sql, Guid.Parse(id)).Select(x => new User
            {
                Id = x.Id.ToString(),
                Biography = x.Biography,
                Birthdate = x.DateBirth,
                City = x.City,
                FirstName = x.Name,
                SecondName = x.Surname
            }).FirstOrDefault();

            return new ObjectResult(result);
        }

        /// <summary>
        /// Поиск анкет
        /// </summary>
        /// <param name="firstName">Условие поиска по имени</param>
        /// <param name="lastName">Условие поиска по фамилии</param>
        /// <response code="200">Успешные поиск пользователя</response>
        /// <response code="400">Невалидные данные</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpGet]
        [Route("/user/search")]
        [Authorize]
        [ValidateModelState]
        [SwaggerOperation("UserSearchGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<User>), description: "Успешные поиск пользователя")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Search([FromQuery][Required] string firstName, [FromQuery][Required] string lastName)
        {
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<User>));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            const string sql = @"SELECT * FROM users WHERE name = @p0 AND surname = @p1";
            var result = _repository.Query<UserEntity>(sql, firstName, lastName).Select(x => new User
            {
                Id = x.Id.ToString(),
                Biography = x.Biography,
                Birthdate = x.DateBirth,
                City = x.City,
                FirstName = x.Name,
                SecondName = x.Surname
            }).ToList();

            return new ObjectResult(result);
        }
    }
}
