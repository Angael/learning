# Notes: Minimal API Program.cs structure

## Lesson summary

Created 2026-07-09 after Angeal shared ChatGPT-written notes about static classes and extension methods. Treat those notes as context the student brought in, not as verified mastery. Student corrected mid-work: the notes were written down by ChatGPT, and the actual known base includes prior DI/config/lifetime lessons with Hermes.

Lesson connects:

- `Program.cs` as startup script.
- `builder` as pre-app setup object.
- `builder.Services` as DI registration area.
- `app` as built web app / endpoint mapper.
- `app.Run()` as server start.
- Extension methods as organization for endpoint mapping and service registration.

Includes JS/Node analogies and one Discord exercise.

## Student state

- Experienced Node/React/Next/backend background.
- Has learned with Hermes: minimal API, request pipeline, DI/config, service lifetimes.
- Separately explored static classes and extension methods with ChatGPT; should build slowly and verify understanding through retrieval, not assume mastery.

## Student response

Answered 2026-07-09.

1. Builder: student said for simple use case it creates app; app is heart of .NET web app, routes, passes requests to middleware/handlers, handles responses, injects registered DI, and does more. Mostly correct but tighten: builder is not the app itself; builder is the setup factory/configurator used before `Build()` creates the app.
2. Before `Build()`: student said services/models must be specified before app uses them; app needs to know what it supports before accepting routes needing DI. Correct direction. Tighten: routes can be mapped after build, but handler dependency resolution happens at request time against the built service provider; missing registrations often fail at runtime/startup validation depending on pattern. Student noticed DI runtime failure / weaker static analyzability from TS perspective.
3. Extension target: student said app extends `IEndpointRouteBuilder` interface, so `MapHelloEndpoints` can build on it. Correct idea. Better wording: `WebApplication` implements/is compatible with `IEndpointRouteBuilder`; extension method extends the interface type, not app “extends” it in inheritance wording.
4. Route group: `app.MapOrderEndpoints();` correct.

Bonus confusion: `builder.Services.AddSingleton<AppInfo>();` passes no apparent logic, only a generic type argument. Student asks how generic types can do logic in C#. Next repair should explain that generic type arguments are real runtime type metadata in .NET, and `AddSingleton<TService>()` is an extension method that records `typeof(TService)` plus lifetime in the service collection. The logic is inside the generic method body, not inside the type argument.

## Watch

- Do not over-treat imported notes as student-authored understanding.
- Student likely understands DI more than the original imported prompt implies.
- Reinforce extension methods as organization and compile-time syntax, not runtime magic.
- Keep advanced DI details light unless asked.
- Repair terminology: `WebApplication` implements `IEndpointRouteBuilder`; avoid saying the object “extends” the interface.
- Useful next micro-lesson: generic method type arguments + `typeof(T)` + DI registration descriptor.

## Expected exercise answers

1. Builder: setup phase for config/logging/services/hosting before the app is built.
2. Registrations happen before `Build()` because the service provider/app is created from those registrations.
3. `IEndpointRouteBuilder` in this lesson; concrete `WebApplication` is compatible with it.
4. Something like `app.MapOrderEndpoints();`.
