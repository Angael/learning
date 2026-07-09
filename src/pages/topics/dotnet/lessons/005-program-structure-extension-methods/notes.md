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

## Watch

- Do not over-treat imported notes as student-authored understanding.
- Student likely understands DI more than the original imported prompt implies.
- Reinforce extension methods as organization and compile-time syntax, not runtime magic.
- Keep advanced DI details light unless asked.

## Expected exercise answers

1. Builder: setup phase for config/logging/services/hosting before the app is built.
2. Registrations happen before `Build()` because the service provider/app is created from those registrations.
3. `IEndpointRouteBuilder` in this lesson; concrete `WebApplication` is compatible with it.
4. Something like `app.MapOrderEndpoints();`.
