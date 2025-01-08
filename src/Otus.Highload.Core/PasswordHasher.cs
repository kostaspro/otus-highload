using System.Security.Cryptography;
using System.Text;

namespace Otus.Highload;

public class PasswordHasher : IPasswordHasher
{
    public string Hash(string password)
    {
        return Convert.ToBase64String(SHA1.HashData(Encoding.UTF8.GetBytes(password)));
    }
}