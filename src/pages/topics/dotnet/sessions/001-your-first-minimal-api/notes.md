# Notes: Your first minimal API

## Session summary

Published on 2026-07-05. This session starts from the terminal-based `dotnet` CLI workflow for Linux/macOS, introduces `Program.cs`, `MapGet`, and a `/status` JSON endpoint, then ends with a retrieval checkpoint before advancing.

## Student response

Recorded on 2026-07-06 from Discord checkpoint reply:

1. Understood `app.MapGet("/status", ...)` as returning JSON with an `ok`/status-like property for a GET request, and connected it to a controller-like role in MVC.
2. Understood SDK vs runtime broadly: SDK includes the runtime plus tools for building, debugging, and running; runtime only runs apps and is likely more optimized/smaller.
3. Successfully received JSON from `/status`; noticed the last property was an ISO date string and inferred it came from C#/.NET behavior despite no explicit imports/usings.

Feedback to reinforce next:

- `MapGet` is endpoint routing, not exactly MVC controller code. It registers: HTTP method + route pattern + handler function.
- SDK/runtime explanation is mostly correct. Sharpen: SDK = create/build/test/publish tooling plus runtime; runtime = execute already-built apps.
- The ISO timestamp came from the session code's `DateTimeOffset.UtcNow`. In modern C# templates, implicit/global usings make common namespaces available without visible `using` lines.

Follow-up retrieval:

- Route vs handler: understood that the route matches/catches requests by method and path; the handler performs the work using the request context/data and returns the response.
