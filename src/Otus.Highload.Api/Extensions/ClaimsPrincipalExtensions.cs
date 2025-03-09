using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

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
    }
}
