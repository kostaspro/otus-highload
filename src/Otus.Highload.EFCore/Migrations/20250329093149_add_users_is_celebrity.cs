using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Otus.Highload.EFCore.Migrations
{
    /// <inheritdoc />
    public partial class add_users_is_celebrity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "is_celebrity",
                table: "users",
                type: "boolean",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "is_celebrity",
                table: "users");
        }
    }
}
