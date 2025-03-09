using System.ComponentModel.DataAnnotations.Schema;
using Otus.Highload.Users;

namespace Otus.Highload.Posts;

public class PostEntity
{
    public Guid Id { get; set; }
    [NotMapped]
    public UserEntity User { get; set; }
    public Guid UserId { get; set; }
    public string Text { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? UpdateDate { get; set; }
}