# Notes: Request model validation

## Session summary

Published 2026-07-16. This is a bounded transfer from C# positional-record recognition into one ASP.NET Core request boundary. The learner reads supplied code, distinguishes non-nullable annotations from runtime validation, and predicts one accepted and one rejected request. No project construction or validation framework is introduced.

## Reply task

- ID: `[learn:dotnet/007:q1]`
- Difficulty: 3/5
- Exact task: identify the body-bound handler parameter and type; explain why non-nullable `string` does not itself reject whitespace; name `string.IsNullOrWhiteSpace` as the runtime check; predict the status and JSON values for the supplied ordinary and whitespace-only bodies.
- Copy template is self-contained: it includes the ID, supplied code, both JSON bodies, and every answer field.

## Expected reasoning

- ASP.NET Core represents the request-body data as the handler parameter `ShippingAddress address`; its type is `ShippingAddress`.
- The positional entries `Street`, `City`, and `PostalCode` generate named public properties in this record shape.
- `string Street` expresses intended nullability to C# compiler analysis and tooling. It is not a complete runtime input rule and does not reject `""` or `"   "`.
- `string.IsNullOrWhiteSpace(address.Street)` is the explicit runtime check. It is true for null, empty, or whitespace-only text.
- The ordinary body reaches `Results.Ok`: status `200 OK`, with `accepted: true` and `city: "Gdańsk"`.
- The whitespace-only body reaches `Results.BadRequest`: status `400 Bad Request`, with `error: "Street is required."`.

## Acceptable variants

- “Binds,” “deserializes,” “creates,” or “maps” the body to the handler parameter are sufficient descriptions at this level.
- `200` / `200 OK` and `400` / `400 Bad Request` are equivalent predictions.
- JSON spacing, property order, and compact versus expanded formatting do not matter.
- A correct nullability distinction may be phrased as compiler guidance or a declaration of intent versus an executable runtime policy.

## Likely misconception

- Non-nullable `string` guarantees incoming runtime data cannot be null or blank.
- A blank string is the same thing as null, rather than another value caught by `IsNullOrWhiteSpace`.
- The positional record validates its own fields.
- The endpoint receives three independent string parameters rather than one `ShippingAddress address` parameter.

## Next hint

Trace only the first decision: substitute the supplied `street` value into `string.IsNullOrWhiteSpace(address.Street)`. If it is true, stop at `BadRequest`; otherwise continue to `Ok`.

## Evaluation

Not answered yet. Grade the causal model and branch predictions, not exact JSON formatting. Secure evidence requires the annotation/runtime distinction and both response branches. A correct scaffolded answer does not establish missing-property binding, validation frameworks, or independent endpoint construction.
