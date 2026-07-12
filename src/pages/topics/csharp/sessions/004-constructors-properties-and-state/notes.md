# Notes: constructors, properties, and state

## Session summary

Published 2026-07-12. Transfer from basic static knowledge into one small stateful class: constructor-set public state, controlled mutable state, an instance method that changes selected-object state, and a static helper that needs no object.

## Reply task

- ID: `[learn:csharp/004:q1]`
- Difficulty: 3/5
- Exact task: without running the supplied `RetryTracker` code, predict three output lines; repair `RetryTracker.RecordAttempt()` and `email.IsValidMaxAttempts(2)` with the smallest changes; explain ownership; explain why only `email.Attempts` changes.
- Copy template is embedded in the session and begins with the permanent ID.

## Expected reasoning

- Output is `True`, `1`, `0`.
- Repairs are `email.RecordAttempt();` and `RetryTracker.IsValidMaxAttempts(2);`.
- `RecordAttempt` reads and changes `Attempts` for one selected tracker; it therefore needs instance state and an instance receiver.
- `IsValidMaxAttempts` uses only its argument; it has no implicit `this` and belongs to the type.
- `email` and `webhook` are distinct objects. They share a class definition, not a single `Attempts` value.

## Acceptable variants

- Any named tracker instance is valid for the first repair if the learner explains that it selects that object’s state.
- `Console.WriteLine(...)` around either repaired expression is acceptable.
- “Type-level” or “shared behavior” is acceptable for static when the explanation does not claim shared instance state.
- It is sufficient to explain that `get;` properties are assignable in the constructor; no exception-handling discussion is required.

## Likely misconception

- `get;` means a compile-time constant or type-wide value rather than per-object state fixed after construction.
- A static method is outside the class or can implicitly access one current object.
- Two objects created from the same class share mutable property values.

## Next hint

When choosing a receiver, ask: “Which object’s state could this line read or change?” If the answer is one object, start from that variable. If the answer is no object and all inputs are explicit, start from the type.

## Student response

- Pending.

## Evaluation

- Pending learner response. Prior session supplied only self-report for basic `static`; evaluate this task for transfer into stateful object construction and receiver choice.
