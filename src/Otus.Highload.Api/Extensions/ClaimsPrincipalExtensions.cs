using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Otus.Highload.Security;

namespace Otus.Highload.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static Guid GetUserId(this ClaimsPrincipal principal)
        {
            var idValue = principal.FindFirstValue(ClaimTypes.NameIdentifier);
            return Guid.TryParse(idValue, out var userId)
                ? userId
                : throw new InvalidOperationException($"{JwtRegisteredClaimNames.NameId} not found");
        }
        public static bool IsCelebrity(this ClaimsPrincipal principal)
        {
            return principal.HasClaim(x => x.Type == AppClaimTypes.IsCelebrity);
        }
    }
}
