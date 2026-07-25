import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/008",
  "topic": "csharp",
  "number": "008",
  "type": "practice",
  "title": "Positional constructor mismatch",
  "summary": "Use two compiler type errors to find one reversed argument pair, repair the constructor call, and verify the generated property values.",
  "date": "2026-07-23",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Use two compiler type errors to find one reversed argument pair, repair the constructor call, and verify the generated property values."
  ],
  "replyTasks": {
    "learn:csharp/008:q1": []
  },
  "replyTaskState": {
    "learn:csharp/008:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/008/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/008/"
  },
  "archive": "# Notes: Positional constructor mismatch\n\n## Session summary\n\nPublished 2026-07-23. This is a read-and-debug transfer after secure bounded positional-record construction in C# 007. It supplies one fixed three-field record, one constructor call with the final two values reversed, and the two resulting `CS1503` messages. The learner repairs one line, links both errors to one ordering fault, distinguishes nullable from optional, and verifies two generated-property values.\n\n## Reply task\n\n- ID: `[learn:csharp/008:q1]`\n- Difficulty: 3/5\n- Exact task: keep the supplied `DeliveryRequest` declaration unchanged; correct the one constructor line; explain in one short sentence that positional matching and the reversed second and third values cause both errors and that `string?` permits `null` but does not remove the argument position; give the resulting values of `request.Quantity` and `request.Note`.\n- Supplied declaration: `public record DeliveryRequest(string Item, int Quantity, string? Note);`\n- Faulty call: `var request = new DeliveryRequest(\"Notebook\", \"Leave at desk\", 2);`\n- Supplied diagnostics:\n\n  ```text\n  error CS1503: Argument 2: cannot convert from 'string' to 'int'\n  error CS1503: Argument 3: cannot convert from 'int' to 'string?'\n  ```\n\n- Copy template is self-contained: it includes the permanent ID, declaration, faulty call, both diagnostics, constraints, and labeled answer fields. `ReplyTask` consumes the template while leaving the answer textarea empty.\n\n## Expected answer\n\n```csharp\nvar request = new DeliveryRequest(\"Notebook\", 2, \"Leave at desk\");\n```\n\nA concise successful explanation: constructor arguments match the record parameters by position; arguments 2 and 3 were reversed, so one ordering mistake caused both errors, while `string?` allows a string or `null` in the third position but does not make that position optional.\n\n```text\nrequest.Quantity = 2\nrequest.Note = \"Leave at desk\"\n```\n\n## Expected reasoning\n\n- Match `\"Notebook\"` to `string Item`, `2` to `int Quantity`, and `\"Leave at desk\"` to `string? Note` from left to right.\n- Read the two diagnostics together. The value needed by argument 2 is sitting at argument 3, and the value accepted by argument 3 is sitting at argument 2.\n- Repair the argument order rather than changing the correct declaration or converting values.\n- A nullable annotation changes the allowed values for one position. It does not create a default value, remove the parameter, or make the argument optional.\n- The generated `Quantity` and `Note` properties retain the values passed to their matching constructor positions.\n\n## Acceptable variants\n\n- An explicit local type may replace `var`: `DeliveryRequest request = new DeliveryRequest(\"Notebook\", 2, \"Leave at desk\");`.\n- A target-typed `new` with an explicit local type is valid, but it was not modelled and should not be required.\n- Wording may vary if the explanation clearly identifies positional matching, the reversed final pair as the shared cause, and nullable rather than optional.\n- Quoting the string property value with C# quotes or reporting it as plain text is acceptable.\n- Whitespace and punctuation differences are not targets.\n\n## Likely misconception\n\n- Treating each diagnostic as an unrelated problem rather than two effects of one reversed pair.\n- Changing the record declaration to fit the bad call.\n- Casting or converting the two values instead of restoring their order.\n- Saying `string?` makes the third constructor argument optional or allows it to be omitted.\n- Reporting the faulty-call order as the resulting property values.\n\n## Next hint\n\nWrite the three declared types in order: `string`, `int`, `string?`. Now place each supplied value under the type that accepts it. Keep all three positions.\n\n## Response and evaluation\n\n### 2026-07-23 — Angeal\n\n> `var request = new DeliveryRequest(\"Notebook\", 2, \"Leave at desk\");`\n>\n> Both errors were caused by swapping the second and third arguments; `string?` allows `null`, but the third argument must still be provided.\n>\n> `request.Quantity`: `2`\n> `request.Note`: `\"Leave at desk\"`\n>\n> The record expects arguments in the order `string`, `int`, `string?`.\n\n**Assessment:** Secure. The corrected call, shared positional cause, nullable-versus-optional distinction, and both generated property values are all correct. The extra final sentence accurately states the constructor order. No repair is needed.\n\n**Next action:** Stop here. This target is secure; a later session can revisit positional arguments in a new context.\n"
};
