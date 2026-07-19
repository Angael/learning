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

- 2026-07-19 learner reply: Correctly traced JSON body data into the `address` parameter and identified that ASP.NET Core creates a `ShippingAddress` record when compatible fields are supplied. Correctly identified `string.IsNullOrWhiteSpace(address.Street)` as the guard for null, empty, or whitespace-only text, while raising the useful question of what non-nullability does at runtime.
- Correctly predicted the success branch as `200 OK` with `accepted: true` and the city value, and the rejection branch as `400 Bad Request` with an error field.
- Feedback to give: name the whole parameter precisely as `ShippingAddress address` (parameter name `address`, type `ShippingAddress`). Non-nullable `string` is mainly a compiler/tooling promise; it does not independently reject incoming null, empty, or whitespace-only JSON values at runtime. The explicit `IsNullOrWhiteSpace` expression enforces this endpoint’s street rule.
- Evidence is secure for this narrowly scaffolded request-binding and branch-tracing task. It does not establish missing-property binding, validation frameworks, or independent endpoint construction.

## Delivery history

- 2026-07-19: Resurfaced the same task as the day’s one action. Added a short read-only cue on the canonical page; preserved the supplied code, request bodies, task wording, expected answers, and permanent ID. No new learner evidence.
