# Notes: Public surface choice

## Session summary

Published 2026-07-17. This is a light fresh transfer after successful C# 005 retrieval. It uses a non-shipping domain to test one fixed request-value choice, one related guarded-state class choice, the safer public property surface, and a supplied two-call trace. No code construction is required.

## Reply task

- ID: `[learn:csharp/006:q1]`
- Difficulty: 3/5
- Exact task: using supplied domain facts and candidate type/property surfaces, make two type choices with short reasons, choose between public and private setters for `Status`, and predict the Boolean result and final status for two sequential calls to the supplied `Confirm()` method.
- Copy template is self-contained: it includes the ID, both domain descriptions, permitted type choices, both property choices, the complete transition method and initial status, constraints, four prompts, and answer fields.

## Expected reasoning

- Use a `record` for `TableBookingRequest` because this design treats it as one fixed request-shaped value supplied as a whole.
- Use a `class` for `TableBooking` because one continuing booking has guarded changing state.
- Choose `public string Status { get; private set; }`. Callers may read the status but cannot assign it directly and bypass `Confirm()`.
- A new booking begins at `"Pending"`.
- First `Confirm()` call: the guard is false, the method sets status to `"Confirmed"`, and returns `true`; final status is `"Confirmed"`.
- Second `Confirm()` call: the guard is true, the method returns `false` before assignment; final status remains `"Confirmed"`.

## Acceptable variants

- “Value equality,” “value-shaped request,” “fixed input,” or “compact data carrier” can justify the record choice, provided the answer does not claim that every record is immutable.
- “Lifecycle,” “identity,” “changing/guarded state,” or “the method controls change” can justify the class choice.
- “Choice 2,” “private setter,” or the complete property declaration are equivalent.
- Boolean values may be written as `true`/`false` or true/false. Status quotes and capitalization are not grading targets when the state prediction is unambiguous.

## Likely misconception

- A record can never change, rather than this positional record being used as a fixed request value in this design.
- `private set` prevents the class's own method from changing the property.
- A public setter is safe because `Confirm()` also exists; callers could bypass the method entirely.
- The second call sets the status again or resets it, rather than returning at the guard.
- The final status is the same thing as the returned Boolean.

## Next hint

Trace one call at a time. Write the status before the call, evaluate `Status != "Pending"`, then follow either the early return or the assignment and final return.

## Evaluation

Not answered yet. Secure evidence requires both the safer-surface reason and the complete two-call trace. Correct type labels alone repeat prior evidence and do not establish guarded-state prediction.

## Resurfacing

- 2026-07-18: assigned the existing four-part checkpoint as the sole catch-up action. Preserved the canonical page, task wording, and permanent ID; no new assessment or model was added while this reply remains outstanding.
