using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using Otus.Highload.Data;

namespace Otus.Highload.Attributes
{
    public class ReplicationRoutingDataSourceAttribute : ActionFilterAttribute
    {
        public bool ReadOnly { get; set; }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var selector = (ReplicationRoutingDataSourceSelector)context.HttpContext.RequestServices.GetRequiredService(typeof(ReplicationRoutingDataSourceSelector));
            selector.IsReadOnly = ReadOnly;
        }
    }
}
