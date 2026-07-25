import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/007",
  "topic": "csharp",
  "number": "007",
  "type": "practice",
  "title": "Compact request model",
  "summary": "Write one public positional record from a supplied three-field specification, construct one value, and read one generated property.",
  "date": "2026-07-20",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Write one public positional record from a supplied three-field specification, construct one value, and read one generated property."
  ],
  "replyTasks": {
    "learn:csharp/007:q1": []
  },
  "replyTaskState": {
    "learn:csharp/007:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/007/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/007/"
  },
  "archive": "# Notes: Compact request model\n\n## Session summary\n\nPublished 2026-07-20. This is the first direct C# model-construction task after secure model-choice evidence in C# 006. It asks for one public positional-record declaration, one construction, and one generated-property read. The model uses different names and a smaller shape. No design choice, setter, method, endpoint, validation, or project work is included.\n\n## Reply task\n\n- ID: `[learn:csharp/007:q1]`\n- Difficulty: 3/5\n- Exact task: from the supplied `WorkshopSignupRequest` specification, write exactly three C# lines: the public positional-record declaration in the given field order, a `new` expression assigned to `signup` with the supplied values, and a read of `signup.SeatCount` assigned to `seats`.\n- Copy template is self-contained: it includes the ID, a complete syntax model with different names, the type and ordered field specification, exact construction values and variable names, constraints, and three answer fields.\n\n## Expected answer\n\n```csharp\npublic record WorkshopSignupRequest(string AttendeeName, int SeatCount, string? Note);\nvar signup = new WorkshopSignupRequest(\"Maya\", 2, null);\nvar seats = signup.SeatCount;\n```\n\n## Expected reasoning\n\n- Keep `public record`, the type name, positional parameter list, and final semicolon in the declaration.\n- Preserve the supplied field order and exact types. `Note` is `string?`, so `null` is permitted by the nullable type system.\n- Supply all three constructor arguments in the declared order. Nullable does not mean that the constructor position is omitted.\n- The positional parameter `SeatCount` generates a property with the same PascalCase name, so `signup.SeatCount` is the property read.\n\n## Acceptable variants\n\n- Explicit local types may replace `var`: `WorkshopSignupRequest signup = ...` and `int seats = ...`.\n- Whitespace and blank-line differences are not grading targets.\n- A target-typed construction such as `WorkshopSignupRequest signup = new(\"Maya\", 2, null);` is valid, but it should not be required because it was not modelled.\n- If the three requested lines are correct, do not require an explanation.\n\n## Likely misconception\n\n- Omitting the third constructor argument because `string?` was read as optional rather than nullable.\n- Writing `string Note` and then passing `null`, losing the intended nullable annotation.\n- Using TypeScript-like syntax or an object literal instead of a C# positional record.\n- Reading `signup.seatCount` rather than the generated PascalCase `signup.SeatCount` property.\n- Leaving out `public`, `record`, `new`, or the declaration semicolon.\n\n## Next hint\n\nCopy the three-line shape from the model. Change the type name, then copy the three supplied property names and types in order. Use the same order for the three values.\n\n## Response and evaluation\n\n- 2026-07-20: Angeal answered exactly the required three lines:\n\n  ```csharp\n  public record WorkshopSignupRequest(string AttendeeName, int SeatCount, string? Note);\n  var signup = new WorkshopSignupRequest(\"Maya\", 2, null);\n  var seats = signup.SeatCount;\n  ```\n\n- Result: correct and complete. The declaration preserves `public record`, the requested names, types, order, and semicolon. Construction supplies all three values in order, including `null` for nullable `Note`. The final line reads the generated PascalCase `SeatCount` property.\n- Evidence: secure for this bounded positional-record declaration, construction, and property-read pattern.\n- Next: proceed to a small read/debug transfer rather than repair this task.\n"
};
