# Notes: Positive quantity rule

## Session summary

Published 2026-07-22. This is a narrow validation transfer from .NET 007. The learner reads a supplied request type and Minimal API handler, separates the range of `int` from an explicit positive-quantity rule, evaluates one condition for two complete bodies, and predicts each response. No project construction, binding edge case, or validation framework is introduced.

## Reply task

- ID: `[learn:dotnet/008:q1]`
- Difficulty: 3/5
- Exact task: explain why `int` itself permits `0`; identify `request.Quantity <= 0` as the explicit runtime rule; evaluate the condition for quantities `2` and `0`; predict the exact status and JSON values for each branch.
- Copy template is self-contained: it includes the ID, complete supplied request type and handler, both complete JSON bodies, scope instruction, every prompt, and separate answer fields.

## Expected reasoning

- `int` represents whole numbers, including negative values, `0`, and positive values. It does not express a positive-only rule.
- `request.Quantity <= 0` is the explicit runtime guard. It rejects zero and negative values.
- For quantity `2`, `2 <= 0` is `false`, so execution reaches `Results.Ok`.
- Request 1 returns `200 OK` with `accepted: true`, `sku: "ABC-123"`, and `quantity: 2`.
- For quantity `0`, `0 <= 0` is `true`, so the handler immediately returns `Results.BadRequest`.
- Request 2 returns `400 Bad Request` with `error: "Quantity must be greater than zero."`.

## Expected answer

A. No. `0` is a valid `int`. The positive-only rule is `request.Quantity <= 0`.

B. `false`; `200 OK`; `{ "accepted": true, "sku": "ABC-123", "quantity": 2 }`.

C. `true`; `400 Bad Request`; `{ "error": "Quantity must be greater than zero." }`.

## Acceptable variants

- `200` / `200 OK` and `400` / `400 Bad Request` are equivalent.
- JSON spacing and property order do not matter. Property names and values do.
- “The condition,” “guard,” “check,” or “runtime rule” are acceptable names for `request.Quantity <= 0`.
- The learner may note that the condition also rejects negative values, but no negative request needs to be traced.

## Likely misconception

- `int` means positive integer or rejects `0` by itself.
- `0 <= 0` is false because zero is not negative.
- The `Ok` response also runs after `BadRequest`, despite the earlier `return`.
- The record enforces the positive-quantity rule by itself.

## Next hint

Substitute only the supplied number into `request.Quantity <= 0`. If the result is true, stop at `BadRequest`. If it is false, continue to `Ok`.

## Evaluation

- Await `[learn:dotnet/008:q1]`.
