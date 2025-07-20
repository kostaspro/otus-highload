using Otus.Highload.Utils;

namespace Otus.Highload.Dialogs;

public static class RedisKeysHelper
{
    public static string GetDialogKey(Guid userId, Guid toUserId)
    {
        return $"dialogs:{BitConverter.ToInt64(userId.Xor(toUserId).ToByteArray())}";
    }

    public static string GetUnreadKey(string dialogKey, Guid userId)
    {
        return $"{dialogKey}:unread:{userId}";
    }
}