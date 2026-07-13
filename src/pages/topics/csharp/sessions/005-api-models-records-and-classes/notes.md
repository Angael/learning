# Notes: API models, records, and classes

## Session summary

Published 2026-07-13. This is the planned move away from repeated static/receiver classification toward one small public-API design decision: a fixed request-shaped value and a domain object with one guarded state transition.

## Reply task

- ID: `[learn:csharp/005:q1]`
- Difficulty: 3/5
- Exact task: model `ShippingAddress` and `Parcel`; choose record or class; prevent direct status writes; trace two attempts to move `Created` to `Dispatched`; compare TypeScript structural compatibility with C# nominal types.
- Copy template is embedded in the session and begins with the permanent ID.

## Expected reasoning

- `ShippingAddress` can be a positional `record` with `Street`, `City`, and `PostalCode`; its public values are init-only in this design.
- `Parcel` should be a `class` with read-only tracking number and `Status { get; private set; }`, initialized to `Created`.
- A method such as `Dispatch()` returns `true` and changes status on the first call; a second call returns `false` and leaves status `Dispatched`.
- `private set` lets callers observe the status while preventing a direct assignment that would bypass the transition rule.
- TypeScript ordinarily uses structural compatibility: matching address-shaped object types can be assignable. Separately declared C# types are nominally distinct even when their matching properties look the same.

## Acceptable variants

- `string` status values or a small enum-like representation are both acceptable if the lifecycle rule is explicit and the surface remains within scope.
- A non-positional record with init-only properties is acceptable for `ShippingAddress`.
- A `Parcel` record is technically possible, but the learner must justify a clear controlled state transition; the intended comparison is a class for the stateful domain object.
- The transition method may be named `Dispatch`, `MarkDispatched`, or equivalent.

## Likely misconception

- A record is automatically immutable, or a class must be mutable.
- A public setter is harmless because the method also checks the transition.
- Matching C# members make independently named types interchangeable as in TypeScript.
- `private set` by itself explains the domain rule without naming the one permitted transition.

## Next hint

When reviewing a public property, ask: “May any caller set this without the object checking a rule?” If not, expose a method that names the allowed transition instead.

## Student response

- Pending.

## Evaluation

- Pending learner response.
