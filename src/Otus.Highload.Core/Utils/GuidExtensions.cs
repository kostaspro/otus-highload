using System.Runtime.InteropServices;

namespace Otus.Highload.Utils
{
    public static class GuidExtensions
    {
        [StructLayout(LayoutKind.Explicit)]
        struct DecomposedGuid
        {
            [FieldOffset(00)] public Guid Value;
            [FieldOffset(00)] public long Hi;
            [FieldOffset(08)] public long Lo;
            public DecomposedGuid(Guid value) : this() => Value = value;
        }

        public static Guid Xor(this Guid a, Guid b)
        {
            var ad = new DecomposedGuid(a);
            var bd = new DecomposedGuid(b);

            ad.Hi ^= bd.Hi;
            ad.Lo ^= bd.Lo;

            return ad.Value;
        }
    }
}
