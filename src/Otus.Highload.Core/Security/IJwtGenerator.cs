namespace Otus.Highload.Security;

public interface IJwtGenerator
{
    string CreateToken(string userId);
}