# Notes: value types, reference types, and null

## Session summary

Published on 2026-07-05. This session teaches the practical assignment model for C#: value types copy the value; reference types copy a reference to the same object. It introduces `null`, `NullReferenceException`, and the modern nullable-reference-type distinction between `string` and `string?`.

## Student response

Angeal answered the retrieval checkpoint on 2026-07-05:

1. `10` and `99` print because `int` is a by-value type; assigning `99` overwrites only the existing variable slot.
2. `second` refers to the same mutable object as `first`; changing a class property mutates the shared instance rather than overwriting the reference.
3. `string` promises a real string exists; `string?` may be `null`, so member calls like `ToUpper()` are unsafe until checked.

Assessment: concept understood well enough to mark the value/reference/nullability achievement complete. Minor vocabulary correction to keep reinforcing later: `second` is not literally "a pointer to first"; `first` and `second` are two variables holding references to the same object.
