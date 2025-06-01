using System.Reflection;
using StackExchange.Redis;

namespace Otus.Highload.Dialogs.Lua
{
    public class DialogModuleLoader
    {
        private readonly IDatabase _redis;
        private static readonly string ResourceName = "Otus.Highload.Dialogs.Lua.dialog.lua";

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
