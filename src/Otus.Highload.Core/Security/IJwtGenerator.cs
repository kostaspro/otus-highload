using Otus.Highload.Users;

namespace Otus.Highload.Security;

public interface IJwtGenerator
{
    string CreateToken(UserEntity user);
}