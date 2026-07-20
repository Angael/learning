# Next learning sessions

- Date: 2026-07-20
- Status: planned
- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)

## Block 1

- Topic / type: C# / bounded positional-record construction
- Outcome: write one compact public positional record from a supplied three-field specification, construct one value, and read one generated property.
- Evidence: [C# 006 notes](/topics/csharp/sessions/006-public-surface-choice/notes/) and [2026-W30](/teacher-notes/weekly/2026-W30/). `[learn:csharp/006:q1]` securely established model choice, a restricted setter, and guarded-state tracing, but independent declaration and use remain untested. [.NET 007 notes](/topics/dotnet/sessions/007-request-model-validation/notes/) now record a secure reply, so the prior catch-up is complete.
- Scope limit: specify the record choice and fields rather than asking for another record/class decision. Use one fresh non-shipping request shape with two required members and one nullable `string?` member. Give a compact syntax model with different names. Ask for one declaration, one `new` expression, and one property read only. No class alternative, setter choice, guarded method, state trace, endpoint, binding, runtime validation, attributes, equality, `with`, deconstruction, interfaces, generics, project setup, or second reply request.
- Session: new `/topics/csharp/sessions/007-compact-request-model/`
- Reply ID: learn:csharp/007:q1

## Implementation

- Status: implemented
- Sessions: [/topics/csharp/sessions/007-compact-request-model/](/topics/csharp/sessions/007-compact-request-model/)
- Review: two read-only advisers checked C# accuracy and exercise quality. Production keeps nullable distinct from optional, uses a different-name two-field model, and asks for exactly three valid C# lines.
- Commit: current production commit
