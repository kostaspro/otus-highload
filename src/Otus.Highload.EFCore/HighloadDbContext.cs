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
                .Property(x => x.Id).HasDefaultValueSql("gen_random_uuid()");
        }
    }
}
