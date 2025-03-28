﻿using Microsoft.EntityFrameworkCore;
using Otus.Highload.Data;
using Otus.Highload.Dialogs;
using Otus.Highload.Posts;
using Otus.Highload.Users;

namespace Otus.Highload.EFCore
{
    public class HighloadDbContext : DbContext
    {
        private readonly ReplicationRoutingDataSourceSelector _dataSourceSelector;

        public HighloadDbContext(DbContextOptions options,
            ReplicationRoutingDataSourceSelector dataSourceSelector) : base(options)
        {
            _dataSourceSelector = dataSourceSelector;
        }

        public DbSet<UserEntity> Users { get; set; }
        public DbSet<UserFriendEntity> UserFriend { get; set; }
        public DbSet<PostEntity> Posts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserEntity>()
                .ToTable(nameof(Users).ToLower())
                .Property(x => x.Id).HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<UserEntity>().HasMany<PostEntity>().WithOne().HasForeignKey(k => k.UserId);

            modelBuilder.Entity<PostEntity>()
                .ToTable(nameof(Posts).ToLower())
                .Property(x => x.Id)
                .HasDefaultValueSql("gen_random_uuid()");

            modelBuilder.Entity<UserFriendEntity>()
                .ToTable("user_friends");

            modelBuilder.Entity<UserFriendEntity>()
                .HasIndex(x => new { x.UserId, x.FriendId }).IsUnique();

            modelBuilder.Entity<UserEntity>().HasIndex(x => new { x.Name, x.Surname })
                .HasOperators("text_pattern_ops", "text_pattern_ops");

            modelBuilder.Entity<DialogEntity>()
                .ToTable("dialogs");

            modelBuilder.Entity<DialogEntity>()
                .Property(x => x.Id).UseIdentityColumn();

            modelBuilder.Entity<DialogEntity>()
                .HasKey(x => new { x.Id, x.ToUserId });

            modelBuilder.Entity<DialogEntity>()
                .HasIndex(x => new { x.UserId, x.ToUserId });
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var cs =  _dataSourceSelector.ConnectionString;
            optionsBuilder.UseNpgsql(cs);
        }
    }
}
