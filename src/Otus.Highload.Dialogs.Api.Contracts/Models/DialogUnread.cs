using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Otus.Highload.Dialogs.Api.Contracts.Models;

/// <summary>
/// 
/// </summary>
[DataContract]
public partial class DialogUnread
{
    [Required]

    [DataMember(Name = "count")]
    public long Count { get; set; }
}