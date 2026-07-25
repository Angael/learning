import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:dotnet/003",
  "topic": "dotnet",
  "number": "003",
  "type": "lesson",
  "title": "Dependency injection and configuration",
  "summary": "Separate settings from code, register services once, and let endpoint handlers ask for what they need.",
  "date": "2026-07-08",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Separate settings from code, register services once, and let endpoint handlers ask for what they need."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/dotnet/sessions/003/",
    "canonicalUrl": "https://learn.widacki.me/topics/dotnet/sessions/003/"
  },
  "archive": "# Notes: Dependency injection and configuration\n\n## Session summary\n\nPublished on 2026-07-08. Light workday .NET continuation after the request-pipeline session. Starts with retrieval correction: `await next(context)` advances to the next pipeline step, not necessarily directly to the next handler. Introduces configuration versus dependency injection through one small `/time` endpoint refactor.\n\n## Student response\n\nRecorded on 2026-07-08 from Discord checkpoint reply:\n\n1. Configuration understood as the place for environment-dependent values, so localhost/dev/beta/prod can use same code with different settings. Also connected it to easier test injection.\n2. Dependency injection understood as easier composition plus better separation of concerns, with testing benefits.\n3. Correctly answered that the framework/DI container creates the registered object and route/controller code only declares what it needs; registrations define which concrete class/config shape to use.\n4. Correctly explained testing value: tests target small units and can replace external services like DB connections with mocks/fakes so the test focuses on one fragment, not the whole stack.\n\nCorrection from follow-up: the session does include `builder.Services.AddSingleton<AppClock>();`, so `AppClock` is registered as a singleton in this example. The student was right to challenge the earlier correction. Reinforce: singleton means the DI container creates one `AppClock` instance and reuses it; the handler still does not create it.\n\n## Watch\n\n- Keep DI first-principles: handlers ask for dependencies; container creates/provides them.\n- Singleton shown for both options object and `AppClock` because example is stateless/options-like; explain why this would not fit request-specific mutable state.\n- Bridge to TS backend: comparable to registering app-wide services and passing dependencies instead of newing them inside route code.\n\n## Next hints\n\n- Checkpoint solid. Next: explain lifetimes `Singleton`, `Scoped`, `Transient` with backend examples, explicitly using this `AppClock` example as the singleton anchor.\n- If fuzzy: repair distinction between configuration values and services/objects.\n"
};
