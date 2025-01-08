# See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

# This stage is used when running from VS in fast mode (Default for Debug configuration)
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080


# This stage is used to build the service project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["NuGet.Config", "."]
COPY ["src/Otus.Highload.Api/Otus.Highload.Api.csproj", "src/Otus.Highload.Api/"]
COPY ["src/Otus.Highload.EFCore/Otus.Highload.EFCore.csproj", "src/Otus.Highload.EFCore/"]
COPY ["src/Otus.Highload.Core/Otus.Highload.Core.csproj", "src/Otus.Highload.Core/"]
RUN dotnet restore "./src/Otus.Highload.Api/Otus.Highload.Api.csproj"
COPY . .
WORKDIR "/src/src/Otus.Highload.Api"
RUN dotnet build "./Otus.Highload.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

# This stage is used to publish the service project to be copied to the final stage
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Otus.Highload.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# This stage is used in production or when running from VS in regular mode (Default when not using the Debug configuration)
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Otus.Highload.Api.dll"]