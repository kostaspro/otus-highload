using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Hangfire;
using Microsoft.Extensions.Caching.Distributed;
using Otus.Highload.Models;
using Otus.Highload.Posts;

namespace Otus.Highload
{
    public class FeedManager
    {
        private readonly IRepository _repository;
        private readonly IDistributedCache _cache;
        private static TimeSpan FeedExpiration = TimeSpan.FromDays(1);

        private static Func<Guid, string> CacheKey = guid => $"feed_cache_{guid}";

        public FeedManager(IRepository repository, IDistributedCache cache)
        {
            _repository = repository;
            _cache = cache;
        }
        
        [JobDisplayName("Update feed: post - {0}")]        
        public async Task Update(Post post, bool isDeleted = false)
        {
            const string usersSql = "select uf.user_id from user_friends uf where uf.friend_id =@p0";
            var users = _repository.Query<Guid>(usersSql, Guid.Parse(post.AuthorUserId)).ToList();

            foreach (var user in users)
            {
                var feedData = await _cache.GetStringAsync(CacheKey(user)) ?? "[]";
                var feed = JsonSerializer.Deserialize<List<Post>>(feedData);

                var change = feed.FirstOrDefault(x => x.Id == post.Id);
                if (change == null)
                {
                    feed.Insert(0, post);
                }
                else if (isDeleted)
                {
                    feed.Remove(change);
                }
                else
                {
                    change.Text = post.Text;
                }
                var res = feed.Take(1000).ToArray();
                await _cache.SetAsync(CacheKey(user), Encoding.UTF8.GetBytes(JsonSerializer.Serialize(res)),
                    new DistributedCacheEntryOptions
                    {
                        SlidingExpiration = FeedExpiration
                    });
            }
        }

        [JobDisplayName("Update feed: all")]
        public Task UpdateAll() => UpdateAll(null);

        [JobDisplayName("Update feed: user - {0}")]
        public async Task UpdateAll(Guid? userId)
        {
            IEnumerable<Guid> friends;
            if (userId.HasValue)
            {
                friends = [(Guid)userId];
            }
            else
            {
                const string friendsSql = "select DISTINCT uf.user_id from user_friends uf";
                friends = _repository.Query<Guid>(friendsSql).ToList();
            }

            const string feedSql =
                "select p.* from user_friends uf join posts p on p.user_id = uf.friend_id where uf.user_id =@p0 order by p.update_date desc, p.create_date desc limit 1000";

            foreach (var friend in friends)
            {
                var feed = _repository.Query<PostEntity>(feedSql, friend).Select(x => new Post
                {
                    Id = x.Id.ToString(),
                    Text = x.Text,
                    AuthorUserId = x.UserId.ToString()
                }).ToList();

                await _cache.SetAsync(CacheKey(friend), Encoding.UTF8.GetBytes(JsonSerializer.Serialize(feed)),
                    new DistributedCacheEntryOptions
                    {
                        SlidingExpiration = FeedExpiration
                    });
            }
        }

        public async Task<IEnumerable<Post>> Feed(Guid userId, decimal? offset, decimal? limit)
        {
            var feedData = await _cache.GetStringAsync(CacheKey(userId));
            if (string.IsNullOrEmpty(feedData))
            {
                return [];
            }
            IEnumerable<Post> res = JsonSerializer.Deserialize<List<Post>>(feedData);
            if (offset.HasValue)
            {
                res = res.Skip(Convert.ToInt32(offset));
            }

            if (limit.HasValue)
            {
                res = res.Take(Convert.ToInt32(limit));
            }

            return res.ToList();
        }
    }
}
