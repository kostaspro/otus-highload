namespace Otus.Highload;

public interface IPasswordHasher
{
    string Hash(string password);
}