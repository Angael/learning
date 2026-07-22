# Next learning sessions

- Date: 2026-07-22
- Status: planned
- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)

## Block 1

- Topic / type: .NET / supplied-code validation transfer
- Outcome: explain why `int` permits `0`, identify one explicit positive-quantity runtime guard, evaluate it for two supplied request bodies, and predict the exact success and rejection branches.
- Evidence: [.NET 007 notes](/topics/dotnet/sessions/007-request-model-validation/notes/) and [2026-W30](/teacher-notes/weekly/2026-W30/). `[learn:dotnet/007:q1]` securely established one request-boundary trace and the difference between C# type guidance and an explicit text-presence rule. A numeric domain rule is a narrowly different application; range validation remains untested.
- Scope limit: use a supplied `AddCartItemRequest(string Sku, int Quantity)` record, supplied Minimal API handler, and two complete correctly typed JSON bodies with quantities `2` and `0`. Assess only whether `int` itself rejects `0`, the condition `request.Quantity <= 0`, its truth value, and the exact `200 OK` / `400 Bad Request` response values. No missing or malformed properties, nullable numbers, serializer or binding failures, validation framework, endpoint filter, middleware, project construction, independent record or endpoint writing, database, stock check, async work, authentication, or tests.
- Session: new `/topics/dotnet/sessions/008-positive-quantity-rule/`
- Reply ID: learn:dotnet/008:q1

## Block 2

- Topic / type: German / tiny format-and-spelling repair
- Outcome: write only the three requested customer lines, omit copied staff lines, and spell `Kaffee` with two `e`.
- Evidence: [German 006 notes](/topics/german/sessions/006-supported-cafe-order/notes/). `[learn:german/006:q1]` used the target Akkusativ articles and fixed social replies correctly, but copied the staff prompts and wrote `Kaffe`; `[learn:german/006:q2]` is the assigned repair.
- Scope limit: keep this as a Polish-led copying and response-format repair on the existing page. Retain exactly three supplied customer lines and the `Broetchen` keyboard allowance. Add a self-contained `copyText` template with the ID and all three lines so the copied task meets repository policy. Do not reassess article choice, add vocabulary, extend the exchange, ask for explanation, or introduce grammar.
- Session: update `/topics/german/sessions/006-supported-cafe-order/`
- Reply ID: learn:german/006:q2

## Implementation

- Status: implemented
- Sessions: [/topics/dotnet/sessions/008-positive-quantity-rule/](/topics/dotnet/sessions/008-positive-quantity-rule/); [/topics/german/sessions/006-supported-cafe-order/](/topics/german/sessions/006-supported-cafe-order/)
- Review: two read-only advisers checked .NET content accuracy and exercise quality. Production keeps the numeric rule separate from the `int` type, traces only the supplied values, and keeps the German repair to three copied customer lines with a self-contained reply template.
- Commit: current production commit
