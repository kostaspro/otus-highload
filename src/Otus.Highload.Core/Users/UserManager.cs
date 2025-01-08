namespace Otus.Highload.Users
{
    public class UserManager
    {
        private readonly IRepository _repository;
        private readonly IPasswordHasher _passwordHasher;

        public UserManager(IRepository repository, IPasswordHasher passwordHasher)
        {
            _repository = repository;
            _passwordHasher = passwordHasher;
        }

        public Guid Register(string firstName, string secondName, DateTime? birthdate, string biography, string city,
            string pass)
        {
            var password = _passwordHasher.Hash(pass);
            var id = Guid.NewGuid();
            const string sql = @"INSERT INTO public.""Users"" (""Id"", ""Name"", ""Surname"", ""DateBirth"", ""Gender"", ""Biography"", ""City"",""Password"")
VALUES(@p0, @p1, @p2, @p3, 1, @p4, @p5, @p6);";
            _repository.Execute(sql, id, firstName, secondName, birthdate, biography, city, password);
            return id;
        }

        public bool Find(string id, string pass)
        {
            var password = _passwordHasher.Hash(pass);
            const string sql = @"SELECT 1 FROM public.""Users"" WHERE ""Id""= @p0 AND ""Password"" = @p1";
            var res = _repository.Query<int>(sql, Guid.Parse(id), password).Any();
            return res;
        }
    }
}
