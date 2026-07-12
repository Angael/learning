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

- Received 2026-07-12:
  - Predicted output: `false`, `1`, `0`.
  - Repairs: `webhook.RecordAttempt();` and `RetryTracker.IsValidMaxAttempts(webhook Attempts);`.
  - Ownership: `RecordAttempt` needs separate stored state; static validation can accept an `int` explicitly.
  - Separate state: `email.RecordAttempt()` changes `email.Attempts`, not `webhook.Attempts`.
- Learner feedback: this session felt almost identical to the previous `static` session.

## Evaluation

- Correct: the second and third output values are `1` and `0`; the separate-object explanation is correct; `webhook.RecordAttempt()` is a valid minimal repair because it selects one tracker.
- Correction: the first printed value is `True` (capital T), because the first `email.RecordAttempt()` succeeds before incrementing `email.Attempts`. The second repair needs `webhook.Attempts` with a dot; it is a valid `int` argument, though `RetryTracker.IsValidMaxAttempts(2)` preserves the original supplied value.
- Important distinction: `RecordAttempt` is instance-owned because it reads and changes the selected tracker's `Attempts` and reads its `MaxAttempts`. `IsValidMaxAttempts` is static because it needs no selected tracker: every input it uses is an explicit argument. Accepting an `int` is a consequence, not the main reason.
- Pedagogical correction: the session changed the surrounding class, but its assessed work still largely repeated receiver/static classification from session 003. That was insufficiently novel transfer after the learner had already said the basic material was trivial. Do not count this as meaningful new progress beyond confirming separate object state.

## Next hint

- Deliberate stopping point: no extra repair is assigned from this duplicate practice. The next C# event must move to a new decision—model a small API/domain type and justify its public surface—rather than ask another static-versus-instance receiver repair.
