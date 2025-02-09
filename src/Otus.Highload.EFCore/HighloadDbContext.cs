using Microsoft.EntityFrameworkCore;
using Otus.Highload.Users;

namespace Otus.Highload.EFCore
{
    public class HighloadDbContext : DbContext
    {
        public HighloadDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<UserEntity> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>()
                .ToTable(nameof(Users).ToLower())
                .Property(x => x.Id).HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<UserEntity>().HasIndex(x => new { x.Name, x.Surname })
                .HasOperators("text_pattern_ops", "text_pattern_ops");
        }
    }
}
