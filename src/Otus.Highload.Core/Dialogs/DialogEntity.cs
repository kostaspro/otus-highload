namespace Otus.Highload.Dialogs;

public class DialogEntity
{
    public long Id { get; set; }
    public Guid ToUserId { get; set; }
    public Guid UserId { get; set; }
    public string Text { get; set; }
    public DateTime CreateDate { get; set; }
    public DateTime? UpdateDate { get; set; }
}