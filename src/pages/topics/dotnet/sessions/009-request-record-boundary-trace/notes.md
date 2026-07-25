# Notes: Request record boundary trace

## Session summary

Published 2026-07-25. This is one integrated supplied-code trace after secure C# positional-record debugging and secure .NET request-boundary tracing. It contrasts constructor position with JSON name matching, then applies one explicit numeric guard. The learner reads only; no project setup, code writing, or accepted-case comparison is required.

## Reply task

- ID: `[learn:dotnet/009:q1]`
- Difficulty: 3/5
- Exact task: identify the body-bound handler parameter name and type; report the three bound property values; explain in one short sentence that JSON object members match named members rather than constructor positions; predict the resulting HTTP status and JSON payload.
- Supplied record: `public record TicketRequest(string EventCode, int Seats, string? Note);`
- Supplied request, in written order: `Note = "Aisle seat, please."`, `Seats = 8`, `EventCode = "JAZZ-42"`.
- Supplied guard: `request.Seats is < 1 or > 6`.
- Scope: trace this request only and stop at its first return. Do not analyse the accepted path.
- Copy template is self-contained: it includes the permanent ID, separate-file context for the record and endpoint, all supplied code, the JSON body, constraints, and every labeled answer field. `ReplyTask` consumes the template while leaving the answer textarea empty.

## Expected answer

```text
Parameter name: request
Parameter type: TicketRequest

request.EventCode = "JAZZ-42"
request.Seats = 8
request.Note = "Aisle seat, please."
```

A concise successful explanation: JSON object members match the record's named members, so their written order does not choose constructor positions.

```text
HTTP status: 400 Bad Request
JSON payload: {"error":"Seats must be between 1 and 6."}
```

## Expected reasoning

- The handler input is the parameter `TicketRequest request`: `request` is its name and `TicketRequest` is its type.
- Match each JSON member to the record member with the same name. The order `Note`, `Seats`, `EventCode` does not change the values.
- The bound `Seats` value is `8`.
- Substitute `8` into `request.Seats is < 1 or > 6`. The condition is true because `8 > 6`.
- The first return ends the handler with `Results.BadRequest(...)`. The explicit guard, not the record itself, causes this rejection.

## Acceptable variants

- `400` and `400 Bad Request` are equivalent.
- JSON whitespace and compact or expanded formatting do not matter.
- Property values may be reported in any answer order if each name has the correct value.
- The explanation may say JSON maps, matches, binds, or deserializes by name. It must clearly reject written order or constructor position as the mapping rule.
- Quoted C# string values or plain text values are acceptable.

## Likely misconception

- Moving `"Aisle seat, please."` into `EventCode` because `Note` is the first JSON member and `EventCode` is the first record position.
- Treating JSON object order like a positional constructor call.
- Naming only `request` or only `TicketRequest` when asked for both parameter name and type.
- Predicting `200 OK` without evaluating the visible guard.
- Saying the record automatically rejects `Seats = 8` rather than naming the explicit handler guard.

## Next hint

Ignore the written order. Draw three name pairs: `EventCode → EventCode`, `Seats → Seats`, and `Note → Note`. Then substitute the value beside `Seats` into the guard and stop at the first return.

## Response and evaluation

Await `[learn:dotnet/009:q1]`.
