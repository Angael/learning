# Next learning sessions

- Date: 2026-07-25
- Status: planned
- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)

## Block 1

- Topic / type: C# + .NET / integrated supplied-code trace
- Outcome: trace one JSON request body whose members appear in a different order from a supplied positional record through ASP.NET Core body binding, generated-property access, and one explicit numeric guard; explain name-based JSON mapping, report the bound values, and predict the rejected status and payload.
- Evidence: [C# 008 notes](/topics/csharp/sessions/008-positional-constructor-mismatch/notes/) secure positional constructor order, nullable-versus-optional reasoning, and generated-property values after a repair. [C# plan](/topics/csharp/plan/) next calls for reading API code and translating TypeScript/backend models into C#. [.NET 007 notes](/topics/dotnet/sessions/007-request-model-validation/notes/) secure one scaffolded request-binding and runtime-validation trace, while [.NET plan](/topics/dotnet/plan/) prioritizes practical production boundaries. This event should integrate those secure parts rather than repeat either task.
- Scope limit: supply one `TicketRequest(string EventCode, int Seats, string? Note)` record, one Minimal API handler, and one JSON body ordered `Note`, `Seats`, `EventCode`, with `Seats` outside a visible `1..6` guard. Ask only for the handler parameter and type, the three bound property values, one short explanation that JSON object members map by name rather than constructor position, and the resulting `400 Bad Request` payload. Use one request and one branch. No code writing, project creation, framework setup, compilation, accepted-case comparison, missing or malformed JSON, naming-policy internals, validation library, middleware, persistence, concurrency, cancellation, tests, or new interface/generic work.
- Session: new `/topics/dotnet/sessions/009-request-record-boundary-trace/`
- Reply ID: `learn:dotnet/009:q1`

## Implementation

- Status: implemented
- Sessions: `/topics/dotnet/sessions/009-request-record-boundary-trace/`
- Commit: pending
