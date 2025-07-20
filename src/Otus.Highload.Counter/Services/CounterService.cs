using Grpc.Core;
using StackExchange.Redis;

namespace Otus.Highload.Counter.Services
{
    public class CounterService : Counter.CounterBase
    {
        private readonly ILogger<CounterService> _logger;
        private readonly IDatabase _database;

        public CounterService(ILogger<CounterService> logger, IDatabase database)
        {
            _logger = logger;
            _database = database;
        }

        public override Task<CounterReply> Increment(CounterRequest request, ServerCallContext context)
        {
            return Task.FromResult(new CounterReply
            {
                Value = _database.StringIncrement(request.Id)
            });
        }

        public override Task<CounterReply> Decrement(CounterRequest request, ServerCallContext context)
        {
            return Task.FromResult(new CounterReply
            {
                Value = _database.StringDecrement(request.Id)
            });
        }

        public override Task<CounterReply> Current(CounterRequest request, ServerCallContext context)
        {
            return Task.FromResult(new CounterReply
            {
                Value = (long)_database.StringGet(request.Id)
            });
        }
    }
}
