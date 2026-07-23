# Notes: Positional constructor mismatch

## Session summary

Published 2026-07-23. This is a read-and-debug transfer after secure bounded positional-record construction in C# 007. It supplies one fixed three-field record, one constructor call with the final two values reversed, and the two resulting `CS1503` messages. The learner repairs one line, links both errors to one ordering fault, distinguishes nullable from optional, and verifies two generated-property values.

## Reply task

- ID: `[learn:csharp/008:q1]`
- Difficulty: 3/5
- Exact task: keep the supplied `DeliveryRequest` declaration unchanged; correct the one constructor line; explain in one short sentence that positional matching and the reversed second and third values cause both errors and that `string?` permits `null` but does not remove the argument position; give the resulting values of `request.Quantity` and `request.Note`.
- Supplied declaration: `public record DeliveryRequest(string Item, int Quantity, string? Note);`
- Faulty call: `var request = new DeliveryRequest("Notebook", "Leave at desk", 2);`
- Supplied diagnostics:

  ```text
  error CS1503: Argument 2: cannot convert from 'string' to 'int'
  error CS1503: Argument 3: cannot convert from 'int' to 'string?'
  ```

- Copy template is self-contained: it includes the permanent ID, declaration, faulty call, both diagnostics, constraints, and labeled answer fields. `ReplyTask` consumes the template while leaving the answer textarea empty.

## Expected answer

```csharp
var request = new DeliveryRequest("Notebook", 2, "Leave at desk");
```

A concise successful explanation: constructor arguments match the record parameters by position; arguments 2 and 3 were reversed, so one ordering mistake caused both errors, while `string?` allows a string or `null` in the third position but does not make that position optional.

```text
request.Quantity = 2
request.Note = "Leave at desk"
```

## Expected reasoning

- Match `"Notebook"` to `string Item`, `2` to `int Quantity`, and `"Leave at desk"` to `string? Note` from left to right.
- Read the two diagnostics together. The value needed by argument 2 is sitting at argument 3, and the value accepted by argument 3 is sitting at argument 2.
- Repair the argument order rather than changing the correct declaration or converting values.
- A nullable annotation changes the allowed values for one position. It does not create a default value, remove the parameter, or make the argument optional.
- The generated `Quantity` and `Note` properties retain the values passed to their matching constructor positions.

## Acceptable variants

- An explicit local type may replace `var`: `DeliveryRequest request = new DeliveryRequest("Notebook", 2, "Leave at desk");`.
- A target-typed `new` with an explicit local type is valid, but it was not modelled and should not be required.
- Wording may vary if the explanation clearly identifies positional matching, the reversed final pair as the shared cause, and nullable rather than optional.
- Quoting the string property value with C# quotes or reporting it as plain text is acceptable.
- Whitespace and punctuation differences are not targets.

## Likely misconception

- Treating each diagnostic as an unrelated problem rather than two effects of one reversed pair.
- Changing the record declaration to fit the bad call.
- Casting or converting the two values instead of restoring their order.
- Saying `string?` makes the third constructor argument optional or allows it to be omitted.
- Reporting the faulty-call order as the resulting property values.

## Next hint

Write the three declared types in order: `string`, `int`, `string?`. Now place each supplied value under the type that accepts it. Keep all three positions.

## Response and evaluation

No response yet.
