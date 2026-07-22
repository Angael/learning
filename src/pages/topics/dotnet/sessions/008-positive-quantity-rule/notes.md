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

- Await `[learn:dotnet/008:q1]`.
