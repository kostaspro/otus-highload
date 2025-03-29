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
        var user = _userManager.Find(id, password);
        if (user != null)
        {
            return _jwtGenerator.CreateToken(user);
        }

        throw new InvalidOperationException($"User with id {id} not found");
    }
}