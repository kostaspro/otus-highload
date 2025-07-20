namespace Otus.Highload.Dialogs;

public class DialogRedisEntity
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public Guid ToUserId { get; set; }
    public Guid UserId { get; set; }
    public string Text { get; set; }
}