using System.Diagnostics.Metrics;

namespace Otus.Highload.Dialogs.Infrastructure.Metrics
{
    public class DialogMetrics
    {
        public DialogMetrics(IMeterFactory meterFactory, IConfiguration configuration)
        {
            var meter = meterFactory.Create(configuration["DialogMeterName"] ??
                                            throw new NullReferenceException("Dialog meter missing a name"));

            MessageAddedCounter = meter.CreateCounter<int>("message-added", "Messages");
            MessageErrorCounter = meter.CreateCounter<int>("message-error", "Messages");

            DurationMessagePerUserHistogram = meter.CreateHistogram<int>("users-message-duration", "Messages", "Message duration per user");
        }
        //Books meters
        private Counter<int> MessageAddedCounter { get; }
        private Counter<int> MessageErrorCounter { get; }
        private Histogram<int> DurationMessagePerUserHistogram { get; }
        public void AddMessage(string toUserId) => MessageAddedCounter.Add(1, new KeyValuePair<string, object?>("to_user_id", toUserId));
        public void ErrorMessage(string userId) => MessageErrorCounter.Add(1, new KeyValuePair<string, object?>("user_id", userId));
        public void DurationMessagePerUser(int size) => DurationMessagePerUserHistogram.Record(size);
    }
}
