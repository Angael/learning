# Notes: Race-safe uniqueness

## Session summary

Published 2026-07-22; revised the same day after learner feedback that the prior `int`/zero trace was below their level. This session assumes practical backend experience and moves to a real API boundary: a duplicate-email pre-check is helpful but cannot guarantee uniqueness under concurrent requests. The learner reviews the interleaving, identifies the database unique constraint/index as the authority, and outlines a concise production response path.

## Reply task

- ID: `[learn:dotnet/008:q1]`
- Difficulty: 4/5
- Exact task: explain how two concurrent `AnyAsync` checks can both return false; name the database uniqueness rule as the final authority and `409 Conflict` as the deliberate response for the raced duplicate; outline the unique database rule, an exception-translation boundary, and correct `CancellationToken` flow.
- Scope: supplied code and timeline only. No project construction, EF migrations, provider-specific error numbers, transaction-isolation deep dive, authentication, tests, or full implementation.

## Expected reasoning

- The read and write are separate operations. Before either request commits an insert, both concurrent reads may observe no matching row.
- A unique constraint or unique index in the database must be the final guard because it serializes the invariant at the persistence boundary.
- A pre-check is optional: it gives a quick normal-case `409`, but it does not replace the database rule.
- The application should recognize the expected unique-constraint failure at a small persistence/service translation boundary and return `409 Conflict`, rather than leak a provider exception or produce `500` for an expected domain conflict.
- The endpoint should pass the request `CancellationToken` into `AnyAsync` and `SaveChangesAsync`; cancellation is not a duplicate-email error.

## Acceptable variants

- “Unique constraint” and “unique index” are acceptable when the learner explains it enforces the invariant in the database.
- The exception translation may live in a repository, application service, endpoint filter, or central exception handler if the responsibility remains narrow and testable.
- `409 Conflict` with a stable error payload, problem-details response, or an equivalent established API error format is acceptable.
- It is fine to omit the pre-check entirely if the answer still gives a useful duplicate response from the database-constraint path.

## Likely misconception

- The pre-check makes concurrent duplicates impossible.
- A transaction or `async` alone makes the check-and-insert atomic.
- The database conflict should surface as an unhandled `500`.
- Request cancellation should be caught and reported as an email conflict.

## Next hint

Separate “a read that looks clear now” from “the one write that must remain valid when every request races.” The latter needs database enforcement.

## Evaluation

### 2026-07-22 · `[learn:dotnet/008:q1]`

- The learner correctly identified the concurrent-request shape: ASP.NET Core can run two endpoint invocations at once, and `await` creates a point where an invocation can yield while database work is in progress.
- The learner correctly expects one request to succeed and the raced duplicate to become a deliberate `409 Conflict`; they also correctly judged that request cancellation is unrelated to duplicate detection.
- High-value correction: `db.Users.Add(...)` is synchronous EF Core change tracking only. It does not send an insert and therefore cannot throw a database unique-constraint error. The database write occurs when `await db.SaveChangesAsync(cancellationToken)` runs, so that is where the expected provider exception arises and must be translated.
- Useful next distinction: a transaction alone does not make a read-then-insert uniqueness check safe at usual isolation levels. Keep a database unique constraint/index as the final authority. An in-process semaphore or single-server queue is not a durable solution: it reduces concurrency only in one process and fails with multiple server instances. Use it only for a distinct, explicitly process-local resource.
- No repair is warranted. The target is secure after the `Add` versus `SaveChangesAsync` correction. Next planned .NET work may progress to a different data-access or validation transfer.
