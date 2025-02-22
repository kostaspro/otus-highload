using Microsoft.Extensions.Configuration;

namespace Otus.Highload.Data
{
    public class ReplicationRoutingDataSourceSelector
    {
        private readonly IConfiguration _configuration;

        public ReplicationRoutingDataSourceSelector(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public bool IsReadOnly { get; set; }

        public string ConnectionString
        {
            get
            {
                var csName = IsReadOnly ? "ReadOnly" : "Default";
                return (_configuration.GetConnectionString(csName) ?? _configuration.GetConnectionString("Default"))!;
            }
        }
    }
}
