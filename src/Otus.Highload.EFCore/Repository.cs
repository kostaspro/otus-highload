using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace Otus.Highload.EFCore
{
    public class Repository : IRepository
    {
        private readonly HighloadDbContext _dbContext;

        public Repository(HighloadDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<TResult> Query<TResult>(string sql, params object[] parameters)
        {
            return _dbContext.Database.SqlQueryRaw<TResult>(sql, CreateParameters(parameters));
        }

        public void Execute(string sql, params object[] parameters)
        {
            _dbContext.Database.ExecuteSqlRaw(sql, CreateParameters(parameters));
        }

        private static object[] CreateParameters(object[] parameters)
        {
            return parameters.Select((x, i) => new NpgsqlParameter($"p{i}", x)).ToArray();
        }
    }
}
