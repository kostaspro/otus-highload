using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using Otus.Highload.Dialogs.Api.Contracts;
using Otus.Highload.Dialogs.Api.Contracts.Models;

namespace Otus.Highload.Controllers;

public class DialogApiClient : IDialogApi
{
    public HttpClient HttpClient { get; }

    public DialogApiClient(HttpClient httpClient)
    {
        HttpClient = httpClient;
    }
    public async Task<List<DialogMessage>> ListAsync(string userId)
    {
        return await HttpClient.GetFromJsonAsync<List<DialogMessage>>($"dialog/{userId}/list");
    }

    public async Task SendAsync(string userId, UserIdSendBody body)
    {
        await HttpClient.PostAsJsonAsync($"/dialog/{userId}/send", body);
    }
}