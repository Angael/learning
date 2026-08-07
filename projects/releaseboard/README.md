# ReleaseBoard

Learning project for dotnet and c#.

## Prerequisites
```bash
sudo pacman -S --needed dotnet-sdk aspnet-targeting-pack aspnet-runtime
```

## Development

Run with:
```bash
dotnet run --project src/ReleaseBoard.Api
# or
dotnet watch --project src/ReleaseBoard.Api
```

Test with:
```bash
dotnet test
```

Formatting:
```bash
dotnet format
```

## Probe endpoints

- `/health` GET endpoint returns 200 if service is running and responding