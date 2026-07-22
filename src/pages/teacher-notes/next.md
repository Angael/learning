# Next learning sessions

- Date: 2026-07-22
- Status: implemented
- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)

## Block 1

- Topic / type: .NET / concurrent API-boundary review
- Outcome: explain a check-then-insert duplicate-email race; identify a database unique constraint/index as the final authority; outline an expected-conflict translation to `409 Conflict` while preserving request cancellation.
- Evidence: [.NET 007 notes](/topics/dotnet/sessions/007-request-model-validation/notes/) and learner feedback. The previous numeric-range transfer was removed because it was introductory relative to Angeal’s backend experience. `.NET 008` now moves into a production failure mode without requiring a project.
- Scope limit: supplied Minimal API endpoint and concurrent timeline. No migrations, provider-specific error numbers, isolation-level deep dive, validation framework, endpoint construction, authentication, or tests.
- Session: `/topics/dotnet/sessions/008-positive-quantity-rule/`
- Reply ID: `learn:dotnet/008:q1`

## Block 2

- Topic / type: German / feedback policy correction
- Outcome: no additional response is due for German 006. The target articles and fixed replies were correct; the copied staff lines and `Kaffe` typo are low-value feedback, not a new assessment.
- Evidence: [German 006 notes](/topics/german/sessions/006-supported-cafe-order/notes/). Learner explicitly rejected a separate repair/transcription task for one typo.
- Scope limit: do not retain or resurface `[learn:german/006:q2]`. Correct similar slips briefly inline, then use fresh material in the next German event.
- Session: updated `/topics/german/sessions/006-supported-cafe-order/`

## Implementation

- Status: implemented
- Sessions: [/topics/dotnet/sessions/008-positive-quantity-rule/](/topics/dotnet/sessions/008-positive-quantity-rule/); [/topics/german/sessions/006-supported-cafe-order/](/topics/german/sessions/006-supported-cafe-order/)
- Review: .NET 008 now assesses a real concurrency boundary and production responsibility split. German 006 has no copy-only repair.
- Commit: pending verification
