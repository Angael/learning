import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:dotnet/005",
  "topic": "dotnet",
  "number": "005",
  "type": "practice",
  "title": "Minimal API Program.cs structure",
  "summary": "Read builder, services, app, and extension methods as a clear ASP.NET Core startup structure instead of magic.",
  "date": "2026-07-09",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Read builder, services, app, and extension methods as a clear ASP.NET Core startup structure instead of magic."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/dotnet/sessions/005/",
    "canonicalUrl": "https://learn.widacki.me/topics/dotnet/sessions/005/"
  },
  "archive": "# Notes: Minimal API Program.cs structure\n\n## Session summary\n\nCreated 2026-07-09 after Angeal shared ChatGPT-written notes about static classes and extension methods. Treat those notes as context the student brought in, not as verified mastery. Student corrected mid-work: the notes were written down by ChatGPT, and the actual known base includes prior DI/config/lifetime sessions with Hermes.\n\nSession connects:\n\n- `Program.cs` as startup script.\n- `builder` as pre-app setup object.\n- `builder.Services` as DI registration area.\n- `app` as built web app / endpoint mapper.\n- `app.Run()` as server start.\n- Extension methods as organization for endpoint mapping and service registration.\n\nIncludes JS/Node analogies and one Discord exercise.\n\n## Student state\n\n- Experienced Node/React/Next/backend background.\n- Has learned with Hermes: minimal API, request pipeline, DI/config, service lifetimes.\n- Separately explored static classes and extension methods with ChatGPT; should build slowly and verify understanding through retrieval, not assume mastery.\n\n## Student response\n\nAnswered 2026-07-09.\n\n1. Builder: student said for simple use case it creates app; app is heart of .NET web app, routes, passes requests to middleware/handlers, handles responses, injects registered DI, and does more. Mostly correct but tighten: builder is not the app itself; builder is the setup factory/configurator used before `Build()` creates the app.\n2. Before `Build()`: student said services/models must be specified before app uses them; app needs to know what it supports before accepting routes needing DI. Correct direction. Tighten: routes can be mapped after build, but handler dependency resolution happens at request time against the built service provider; missing registrations often fail at runtime/startup validation depending on pattern. Student noticed DI runtime failure / weaker static analyzability from TS perspective.\n3. Extension target: student said app extends `IEndpointRouteBuilder` interface, so `MapHelloEndpoints` can build on it. Correct idea. Better wording: `WebApplication` implements/is compatible with `IEndpointRouteBuilder`; extension method extends the interface type, not app “extends” it in inheritance wording.\n4. Route group: `app.MapOrderEndpoints();` correct.\n\nBonus confusion: `builder.Services.AddSingleton<AppInfo>();` passes no apparent logic, only a generic type argument. Student asks how generic types can do logic in C#. Next repair should explain that generic type arguments are real runtime type metadata in .NET, and `AddSingleton<TService>()` is an extension method that records `typeof(TService)` plus lifetime in the service collection. The logic is inside the generic method body, not inside the type argument.\n\n## Watch\n\n- Do not over-treat imported notes as student-authored understanding.\n- Student likely understands DI more than the original imported prompt implies.\n- Reinforce extension methods as organization and compile-time syntax, not runtime magic.\n- Keep advanced DI details light unless asked.\n- Repair terminology: `WebApplication` implements `IEndpointRouteBuilder`; avoid saying the object “extends” the interface.\n- Useful next micro-session: generic method type arguments + `typeof(T)` + DI registration descriptor.\n\n## Expected exercise answers\n\n1. Builder: setup phase for config/logging/services/hosting before the app is built.\n2. Registrations happen before `Build()` because the service provider/app is created from those registrations.\n3. `IEndpointRouteBuilder` in this session; concrete `WebApplication` is compatible with it.\n4. Something like `app.MapOrderEndpoints();`.\n"
};
