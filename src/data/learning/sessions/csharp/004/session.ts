import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/004",
  "topic": "csharp",
  "number": "004",
  "type": "lesson",
  "title": "Constructors, properties, and state",
  "summary": "Construct two independent stateful objects, control public mutation, and choose between an instance method and a static helper.",
  "date": "2026-07-12",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Construct two independent stateful objects, control public mutation, and choose between an instance method and a static helper."
  ],
  "replyTasks": {
    "learn:csharp/004:q1": []
  },
  "replyTaskState": {
    "learn:csharp/004:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/004/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/004/"
  },
  "archive": "# Notes: constructors, properties, and state\n\n## Session summary\n\nPublished 2026-07-12. Transfer from basic static knowledge into one small stateful class: constructor-set public state, controlled mutable state, an instance method that changes selected-object state, and a static helper that needs no object.\n\n## Reply task\n\n- ID: `[learn:csharp/004:q1]`\n- Difficulty: 3/5\n- Exact task: without running the supplied `RetryTracker` code, predict three output lines; repair `RetryTracker.RecordAttempt()` and `email.IsValidMaxAttempts(2)` with the smallest changes; explain ownership; explain why only `email.Attempts` changes.\n- Copy template is embedded in the session and begins with the permanent ID.\n\n## Expected reasoning\n\n- Output is `True`, `1`, `0`.\n- Repairs are `email.RecordAttempt();` and `RetryTracker.IsValidMaxAttempts(2);`.\n- `RecordAttempt` reads and changes `Attempts` for one selected tracker; it therefore needs instance state and an instance receiver.\n- `IsValidMaxAttempts` uses only its argument; it has no implicit `this` and belongs to the type.\n- `email` and `webhook` are distinct objects. They share a class definition, not a single `Attempts` value.\n\n## Acceptable variants\n\n- Any named tracker instance is valid for the first repair if the learner explains that it selects that object’s state.\n- `Console.WriteLine(...)` around either repaired expression is acceptable.\n- “Type-level” or “shared behavior” is acceptable for static when the explanation does not claim shared instance state.\n- It is sufficient to explain that `get;` properties are assignable in the constructor; no exception-handling discussion is required.\n\n## Likely misconception\n\n- `get;` means a compile-time constant or type-wide value rather than per-object state fixed after construction.\n- A static method is outside the class or can implicitly access one current object.\n- Two objects created from the same class share mutable property values.\n\n## Next hint\n\nWhen choosing a receiver, ask: “Which object’s state could this line read or change?” If the answer is one object, start from that variable. If the answer is no object and all inputs are explicit, start from the type.\n\n## Student response\n\n- Received 2026-07-12:\n  - Predicted output: `false`, `1`, `0`.\n  - Repairs: `webhook.RecordAttempt();` and `RetryTracker.IsValidMaxAttempts(webhook Attempts);`.\n  - Ownership: `RecordAttempt` needs separate stored state; static validation can accept an `int` explicitly.\n  - Separate state: `email.RecordAttempt()` changes `email.Attempts`, not `webhook.Attempts`.\n- Learner feedback: this session felt almost identical to the previous `static` session.\n\n## Evaluation\n\n- Correct: the second and third output values are `1` and `0`; the separate-object explanation is correct; `webhook.RecordAttempt()` is a valid minimal repair because it selects one tracker.\n- Correction: the first printed value is `True` (capital T), because the first `email.RecordAttempt()` succeeds before incrementing `email.Attempts`. The second repair needs `webhook.Attempts` with a dot; it is a valid `int` argument, though `RetryTracker.IsValidMaxAttempts(2)` preserves the original supplied value.\n- Important distinction: `RecordAttempt` is instance-owned because it reads and changes the selected tracker's `Attempts` and reads its `MaxAttempts`. `IsValidMaxAttempts` is static because it needs no selected tracker: every input it uses is an explicit argument. Accepting an `int` is a consequence, not the main reason.\n- Pedagogical correction: the session changed the surrounding class, but its assessed work still largely repeated receiver/static classification from session 003. That was insufficiently novel transfer after the learner had already said the basic material was trivial. Do not count this as meaningful new progress beyond confirming separate object state.\n\n## Next hint\n\n- Deliberate stopping point: no extra repair is assigned from this duplicate practice. The next C# event must move to a new decision—model a small API/domain type and justify its public surface—rather than ask another static-versus-instance receiver repair.\n"
};
