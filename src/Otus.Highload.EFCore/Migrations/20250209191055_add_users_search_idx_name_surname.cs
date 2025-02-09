using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Otus.Highload.EFCore.Migrations
{
    /// <inheritdoc />
    public partial class add_users_search_idx_name_surname : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "ix_users_name_surname",
                table: "users",
                columns: new[] { "name", "surname" })
                .Annotation("Npgsql:IndexOperators", new[] { "text_pattern_ops", "text_pattern_ops" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "ix_users_name_surname",
                table: "users");
        }
    }
}
