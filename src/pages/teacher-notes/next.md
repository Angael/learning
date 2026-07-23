# Next learning sessions

- Date: 2026-07-23
- Status: implemented
- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)

## Block 1

- Topic / type: C# / positional-record read and debug transfer
- Outcome: connect two compiler type errors to one reversed-argument fault; repair the constructor call without changing the declaration; explain that `string?` permits `null` but does not make the constructor position optional; verify the resulting generated-property values.
- Evidence: [C# 007 notes](/topics/csharp/sessions/007-compact-request-model/notes/) show secure declaration, ordered construction, nullable argument, and generated-property reading under a model. [.NET 008 notes](/topics/dotnet/sessions/008-positive-quantity-rule/notes/) show strong backend reasoning and no repair need, so today's C# task should require diagnosis rather than another copy-shaped syntax drill.
- Scope limit: supply one correct three-field positional record, one constructor call with the last two arguments reversed, and the two resulting compiler messages. Require one corrected line, one short root-cause explanation, and the resulting values of two properties. No declaration rewrite, class/record choice, setters, methods, endpoint, EF Core, optional/default parameters, named arguments, custom constructors, project construction, or compiler setup.
- Session: new `/topics/csharp/sessions/008-positional-constructor-mismatch/`
- Reply ID: `learn:csharp/008:q1`

## Implementation

- Status: implemented
- Sessions: [/topics/csharp/sessions/008-positional-constructor-mismatch/](/topics/csharp/sessions/008-positional-constructor-mismatch/)
- Review: two read-only advisers checked compiler accuracy and exercise quality. The task keeps the declaration fixed, hides the diagnosis, asks for one shared cause behind both errors, and uses a self-contained reply template.
- Commit: current production commit
