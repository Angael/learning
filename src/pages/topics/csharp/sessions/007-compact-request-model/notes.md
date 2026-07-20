# Notes: Compact request model

## Session summary

Published 2026-07-20. This is the first direct C# model-construction task after secure model-choice evidence in C# 006. It asks for one public positional-record declaration, one construction, and one generated-property read. The model uses different names and a smaller shape. No design choice, setter, method, endpoint, validation, or project work is included.

## Reply task

- ID: `[learn:csharp/007:q1]`
- Difficulty: 3/5
- Exact task: from the supplied `WorkshopSignupRequest` specification, write exactly three C# lines: the public positional-record declaration in the given field order, a `new` expression assigned to `signup` with the supplied values, and a read of `signup.SeatCount` assigned to `seats`.
- Copy template is self-contained: it includes the ID, a complete syntax model with different names, the type and ordered field specification, exact construction values and variable names, constraints, and three answer fields.

## Expected answer

```csharp
public record WorkshopSignupRequest(string AttendeeName, int SeatCount, string? Note);
var signup = new WorkshopSignupRequest("Maya", 2, null);
var seats = signup.SeatCount;
```

## Expected reasoning

- Keep `public record`, the type name, positional parameter list, and final semicolon in the declaration.
- Preserve the supplied field order and exact types. `Note` is `string?`, so `null` is permitted by the nullable type system.
- Supply all three constructor arguments in the declared order. Nullable does not mean that the constructor position is omitted.
- The positional parameter `SeatCount` generates a property with the same PascalCase name, so `signup.SeatCount` is the property read.

## Acceptable variants

- Explicit local types may replace `var`: `WorkshopSignupRequest signup = ...` and `int seats = ...`.
- Whitespace and blank-line differences are not grading targets.
- A target-typed construction such as `WorkshopSignupRequest signup = new("Maya", 2, null);` is valid, but it should not be required because it was not modelled.
- If the three requested lines are correct, do not require an explanation.

## Likely misconception

- Omitting the third constructor argument because `string?` was read as optional rather than nullable.
- Writing `string Note` and then passing `null`, losing the intended nullable annotation.
- Using TypeScript-like syntax or an object literal instead of a C# positional record.
- Reading `signup.seatCount` rather than the generated PascalCase `signup.SeatCount` property.
- Leaving out `public`, `record`, `new`, or the declaration semicolon.

## Next hint

Copy the three-line shape from the model. Change the type name, then copy the three supplied property names and types in order. Use the same order for the three values.

## Evaluation

Awaiting response.
