namespace Otus.Highload;

public interface IRepository
{
    IQueryable<TResult> Query<TResult>(string sql, params object[] parameters);
    void Execute(string sql, params object[] parameters);
}