using Otus.Highload.Users;

namespace Otus.Highload;

public class UserFriendEntity
{
    public long Id { get; set; }
    public UserEntity User { get; set; }
    public Guid UserId { get; set; }
    public UserEntity Friend { get; set; }
    public Guid FriendId { get; set; }
    public DateTime CreateDate { get; set; }
}