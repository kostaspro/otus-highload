using StackExchange.Redis;
using System.Reflection;
using System.IO;

namespace Otus.Highload.Lua
{
    public class DialogModuleLoader
    {
        private readonly IDatabase _redis;
        private static readonly string ResourceName = "Otus.Highload.Lua.dialog.lua";

        public DialogModuleLoader(IConnectionMultiplexer redis)
        {
            _redis = redis.GetDatabase();
        }

        public void Initialize()
        {
            _redis.Execute("FUNCTION", "FLUSH");
            var assembly = Assembly.GetExecutingAssembly();
            using var stream = assembly.GetManifestResourceStream(ResourceName);
            var module = new StreamReader(stream).ReadToEnd();
            _redis.Execute("FUNCTION", "LOAD", module);
        }
    }
}
