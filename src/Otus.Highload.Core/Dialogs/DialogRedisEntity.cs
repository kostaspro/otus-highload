using Otus.Highload.Utils;

namespace Otus.Highload.Dialogs;

public class DialogRedisEntity
{
    public long Id => GetId(UserId, ToUserId);
    public Guid ToUserId { get; set; }
    public Guid UserId { get; set; }
    public string Text { get; set; }

    public static long GetId(Guid userId, Guid toUserId)
    {
        return BitConverter.ToInt64(userId.Xor(toUserId).ToByteArray());
    }
}