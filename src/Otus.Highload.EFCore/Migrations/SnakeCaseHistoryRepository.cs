using System.Globalization;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Npgsql.EntityFrameworkCore.PostgreSQL.Migrations.Internal;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore;
using EFCore.NamingConventions.Internal;

namespace Otus.Highload.EFCore.Migrations
{
    public class SnakeCaseHistoryRepository : NpgsqlHistoryRepository
    {
        public SnakeCaseHistoryRepository(HistoryRepositoryDependencies dependencies) : base(dependencies)
        {
        }

        protected override void ConfigureTable(EntityTypeBuilder<HistoryRow> history)
        {
            base.ConfigureTable(history);

            var namingRewriter = new SnakeCaseNameRewriter(CultureInfo.InvariantCulture);
            history.ToTable(namingRewriter.RewriteName(DefaultTableName));
            history.Property(h => h.MigrationId).HasColumnName(namingRewriter.RewriteName(nameof(HistoryRow.MigrationId)));
            history.Property(h => h.ProductVersion).HasColumnName(namingRewriter.RewriteName(nameof(HistoryRow.ProductVersion)));
        }
    }
}
