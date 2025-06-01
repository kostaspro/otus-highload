using Otus.Highload.Dialogs.Api.Contracts.Models;

namespace Otus.Highload.Dialogs.Api.Contracts;

public interface IDialogApi
{
    Task<List<DialogMessage>> ListAsync(string userId);
    Task SendAsync(string userId, UserIdSendBody body);
}