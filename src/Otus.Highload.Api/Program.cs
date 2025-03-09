using System;
using Hangfire;
using Hangfire.States;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Otus.Highload.EFCore;

namespace Otus.Highload
{
    /// <summary>
    /// Program
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Main
        /// </summary>
        /// <param name="args"></param>
        public static void Main(string[] args)
        {
            var host = CreateWebHostBuilder(args).Build();

            using (var scope = host.Services.CreateScope())
            {
                var db = scope.ServiceProvider.GetRequiredService<HighloadDbContext>();
                db.Database.Migrate();
            }

            using (var scope = host.Services.CreateScope())
            {
                var manager = scope.ServiceProvider.GetRequiredService<IRecurringJobManager>();
                var jobId = "update_all_feed";
                manager.AddOrUpdate<FeedManager>(jobId, x => x.UpdateAll(), Cron.Daily());
                manager.Trigger(jobId);
            }

            host.Run();
        }

        /// <summary>
        /// Create the web host builder.
        /// </summary>
        /// <param name="args"></param>
        /// <returns>IWebHostBuilder</returns>
        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
