using Microsoft.AspNetCore.Mvc;
using Otus.Highload.Attributes;
using Otus.Highload.Models;
using Swashbuckle.AspNetCore.Annotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System;
using System.Linq;
using System.Threading.Tasks;
using Otus.Highload.Extensions;
using Hangfire;
using Otus.Highload.Posts;
using Microsoft.AspNetCore.Authorization;

namespace Otus.Highload.Controllers
{
    [ApiController]
    [Authorize]
    public class PostApiController : ControllerBase
    {
        private readonly IRepository _repository;
        private readonly FeedManager _feedManager;
        private readonly IBackgroundJobClient _backgroundJobClient;

        public PostApiController(IRepository repository, FeedManager feedManager, IBackgroundJobClient backgroundJobClient)
        {
            _repository = repository;
            _feedManager = feedManager;
            _backgroundJobClient = backgroundJobClient;
        }


        /// <summary>
        /// Создать пост
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">Успешно создан пост</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPost]
        [Route("/post/create")]
        [ValidateModelState]
        [SwaggerOperation("PostCreatePost")]
        [SwaggerResponse(statusCode: 200, type: typeof(string), description: "Успешно создан пост")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Create([FromBody] PostCreateBody body)
        {
            const string sql = "INSERT INTO public.posts(user_id, \"text\", create_date) VALUES(@p0, @p1, now()) RETURNING id";
            var id = _repository.Query<Guid>(sql, User.GetUserId(), body.Text).AsEnumerable().First();

            UpdateFeed(new Post {Id = id.ToString(), AuthorUserId = User.GetUserId().ToString(), Text = body.Text });

            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(string));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));
            //string exampleJson = null;
            //exampleJson = "\"1d535fd6-7521-4cb1-aa6d-031be7123c4d\"";

            //var example = exampleJson != null
            //? JsonConvert.DeserializeObject<string>(exampleJson)
            //: default(string);            //TODO: Change the data returned
            return new ObjectResult(id);
        }

        /// <summary>
        /// Удалить пост
        /// </summary>
        /// <param name="id"></param>
        /// <response code="200">Успешно удален пост</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPut]
        [Route("/post/delete/{id}")]
        [ValidateModelState]
        [SwaggerOperation("PostDeleteIdPut")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Delete([FromRoute][Required] string id)
        {
            const string sql = @"DELETE FROM posts WHERE id = @p0 AND user_id = @p1";
            _repository.Execute(sql, Guid.Parse(id), User.GetUserId());
            UpdateFeed(new Post {Id = id, AuthorUserId = User.GetUserId().ToString()}, true);
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
        /// Получить ленту постов друзей
        /// </summary>
        /// <param name="offset"></param>
        /// <param name="limit"></param>
        /// <response code="200">Успешно получены посты друзей</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpGet]
        [Route("/post/feed")]
        [ValidateModelState]
        [SwaggerOperation("PostFeedGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<Post>), description: "Успешно получены посты друзей")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual async Task<IActionResult> Feed([FromQuery] decimal? offset, [FromQuery] decimal? limit)
        {
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<Post>));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));

            var feed = await _feedManager.Feed(User.GetUserId(), offset, limit);

            //string exampleJson = null;
            //exampleJson = "[ {\n  \"author_user_id\" : \"author_user_id\",\n  \"id\" : \"1d535fd6-7521-4cb1-aa6d-031be7123c4d\",\n  \"text\" : \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa.\"\n}, {\n  \"author_user_id\" : \"author_user_id\",\n  \"id\" : \"1d535fd6-7521-4cb1-aa6d-031be7123c4d\",\n  \"text\" : \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa.\"\n} ]";

            //var example = exampleJson != null
            //? JsonConvert.DeserializeObject<List<Post>>(exampleJson)
            //: default(List<Post>);            //TODO: Change the data returned
            return new ObjectResult(feed);
        }

        /// <summary>
        /// Получить данные поста
        /// </summary>
        /// <param name="id"></param>
        /// <response code="200">Успешно получен пост</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpGet]
        [Route("/post/get/{id}")]
        [ValidateModelState]
        [SwaggerOperation("PostGetIdGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(Post), description: "Успешно получен пост")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Get([FromRoute][Required] string id)
        {
            const string sql = @"SELECT * FROM posts WHERE id = @p0";
            var result = _repository.Query<PostEntity>(sql, Guid.Parse(id)).Select(x => new Post
            {
                Id = x.Id.ToString(),
                Text = x.Text,
                AuthorUserId = x.UserId.ToString()
            }).FirstOrDefault();

            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(Post));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400);

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401);

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(InlineResponse500));

            //TODO: Uncomment the next line to return response 503 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(503, default(InlineResponse500));
            //string exampleJson = null;
            //exampleJson = "{\n  \"author_user_id\" : \"author_user_id\",\n  \"id\" : \"1d535fd6-7521-4cb1-aa6d-031be7123c4d\",\n  \"text\" : \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus mauris ultrices eros in cursus turpis massa.\"\n}";

            //var example = exampleJson != null
            //? JsonConvert.DeserializeObject<Post>(exampleJson)
            //: default(Post);            //TODO: Change the data returned
            return new ObjectResult(result);
        }

        /// <summary>
        /// Обновить пост
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">Успешно изменен пост</response>
        /// <response code="400">Невалидные данные ввода</response>
        /// <response code="401">Неавторизованный доступ</response>
        /// <response code="500">Ошибка сервера</response>
        /// <response code="503">Ошибка сервера</response>
        [HttpPut]
        [Route("/post/update")]
        [ValidateModelState]
        [SwaggerOperation("PostUpdatePut")]
        [SwaggerResponse(statusCode: 500, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        [SwaggerResponse(statusCode: 503, type: typeof(InlineResponse500), description: "Ошибка сервера")]
        public virtual IActionResult Update([FromBody] PostUpdateBody body)
        {
            const string sql = "UPDATE public.posts SET \"text\"=@p0, update_date=now() WHERE id = @p1 and user_id = @p2";
            _repository.Execute(sql, body.Text, Guid.Parse(body.Id), User.GetUserId());


            UpdateFeed(new Post { Id = body.Id, AuthorUserId = User.GetUserId().ToString(), Text = body.Text });

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

        private void UpdateFeed(Post post, bool isDeleted = false)
        {
            BackgroundJob.Enqueue<FeedManager>(x => x.Update(post, isDeleted));
        }
    }
}
