import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:dotnet/001",
  "topic": "dotnet",
  "number": "001",
  "type": "lesson",
  "title": "Your first minimal API",
  "summary": "Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS.",
  "date": "2026-07-05",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/dotnet/sessions/001/",
    "canonicalUrl": "https://learn.widacki.me/topics/dotnet/sessions/001/"
  },
  "archive": "# Notes: Your first minimal API\n\n## Session summary\n\nPublished on 2026-07-05. This session starts from the terminal-based `dotnet` CLI workflow for Linux/macOS, introduces `Program.cs`, `MapGet`, and a `/status` JSON endpoint, then ends with a retrieval checkpoint before advancing.\n\n## Student response\n\nRecorded on 2026-07-06 from Discord checkpoint reply:\n\n1. Understood `app.MapGet(\"/status\", ...)` as returning JSON with an `ok`/status-like property for a GET request, and connected it to a controller-like role in MVC.\n2. Understood SDK vs runtime broadly: SDK includes the runtime plus tools for building, debugging, and running; runtime only runs apps and is likely more optimized/smaller.\n3. Successfully received JSON from `/status`; noticed the last property was an ISO date string and inferred it came from C#/.NET behavior despite no explicit imports/usings.\n\nFeedback to reinforce next:\n\n- `MapGet` is endpoint routing, not exactly MVC controller code. It registers: HTTP method + route pattern + handler function.\n- SDK/runtime explanation is mostly correct. Sharpen: SDK = create/build/test/publish tooling plus runtime; runtime = execute already-built apps.\n- The ISO timestamp came from the session code's `DateTimeOffset.UtcNow`. In modern C# templates, implicit/global usings make common namespaces available without visible `using` lines.\n\nFollow-up retrieval:\n\n- Route vs handler: understood that the route matches/catches requests by method and path; the handler performs the work using the request context/data and returns the response.\n"
};
