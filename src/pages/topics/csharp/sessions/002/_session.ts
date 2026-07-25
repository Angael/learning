import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/002",
  "topic": "csharp",
  "number": "002",
  "type": "lesson",
  "title": "Value types, reference types, and null",
  "summary": "Predict assignment behavior for value types vs reference types, then use nullable reference types to reason about missing values.",
  "date": "2026-07-05",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Predict assignment behavior for value types vs reference types, then use nullable reference types to reason about missing values."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/002/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/002/"
  },
  "archive": "# Notes: value types, reference types, and null\n\n## Session summary\n\nPublished on 2026-07-05. This session teaches the practical assignment model for C#: value types copy the value; reference types copy a reference to the same object. It introduces `null`, `NullReferenceException`, and the modern nullable-reference-type distinction between `string` and `string?`.\n\n## Student response\n\nAngeal answered the retrieval checkpoint on 2026-07-05:\n\n1. `10` and `99` print because `int` is a by-value type; assigning `99` overwrites only the existing variable slot.\n2. `second` refers to the same mutable object as `first`; changing a class property mutates the shared instance rather than overwriting the reference.\n3. `string` promises a real string exists; `string?` may be `null`, so member calls like `ToUpper()` are unsafe until checked.\n\nAssessment: concept understood well enough to mark the value/reference/nullability achievement complete. Minor vocabulary correction to keep reinforcing later: `second` is not literally \"a pointer to first\"; `first` and `second` are two variables holding references to the same object.\n"
};
