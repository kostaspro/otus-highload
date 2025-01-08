using Otus.Highload.Security;

namespace Otus.Highload.Users;

public class LoginManager
{
    private readonly UserManager _userManager;
    private readonly IJwtGenerator _jwtGenerator;

    public LoginManager(UserManager userManager, IJwtGenerator jwtGenerator)
    {
        _userManager = userManager;
        _jwtGenerator = jwtGenerator;
    }
    public string Auth(string id, string password)
    {
        if (_userManager.Find(id, password))
        {
            return _jwtGenerator.CreateToken(id);
        }

        throw new InvalidOperationException($"User with id {id} not found");
    }
}