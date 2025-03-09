using Microsoft.AspNetCore.Mvc;
using Otus.Highload.Attributes;
using Otus.Highload.Models;
using Swashbuckle.AspNetCore.Annotations;
using System.ComponentModel.DataAnnotations;
using System;
using Otus.Highload.Extensions;
using Hangfire;

namespace Otus.Highload.Controllers
{
    [ApiController]
    public class FriendApi : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly FeedManager _feedManager;

        public FriendApi(IRepository repository, FeedManager feedManager)
        {
            _repository = repository;
            _feedManager = feedManager;
        }

        /// <summary>
        /// Удаление пользователя из друзей
        /// </summary>
        /// <param name="userId"></param>
        /// <response code="200">Пользователь успешно удалил из друзей пользователя</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPut]
        [Route("/friend/delete/{user_id}")]
        [ValidateModelState]
        [SwaggerOperation("FriendDeleteUserIdPut")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Delete([FromRoute(Name = "user_id")][Required] string userId)
        {
            const string sql = @"DELETE FROM user_friends WHERE user_id = @p0 AND friend_id = @p1";
            _repository.Execute(sql, User.GetUserId(), Guid.Parse(userId));

            BackgroundJob.Enqueue<FeedManager>(x => x.UpdateAll(User.GetUserId()));

            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            return Ok();
        }

        /// <summary>
        /// Добавление пользователя в друзья
        /// </summary>
        /// <param name="userId"></param>
        /// <response code="200">Пользователь успешно указал своего друга</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPut]
        [Route("/friend/set/{user_id}")]
        [ValidateModelState]
        [SwaggerOperation("FriendSetUserIdPut")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Set([FromRoute(Name = "user_id")][Required] string userId)
        {
            const string sql =
                "INSERT INTO public.user_friends(user_id, friend_id, create_date) VALUES(@p0, @p1, now())";
            _repository.Execute(sql, User.GetUserId(), Guid.Parse(userId));

            BackgroundJob.Enqueue<FeedManager>(x => x.UpdateAll(User.GetUserId()));

            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200);

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            return Ok();
        }
    }
}
