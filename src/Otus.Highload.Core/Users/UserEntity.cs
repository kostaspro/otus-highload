namespace Otus.Highload.Users
{
    public class UserEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime DateBirth { get; set; }
        public GenderEnum Gender { get; set; }
        public string Biography { get; set; }
        public string City { get; set; }
        public string Password { get; set; }
        public bool? IsCelebrity { get; set; }
    }
}
