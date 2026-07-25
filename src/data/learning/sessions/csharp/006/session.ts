import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/006",
  "topic": "csharp",
  "number": "006",
  "type": "practice",
  "title": "Public surface choice",
  "summary": "Choose a positional record for one fixed request value, a class for related guarded state, the safer property surface, and the result of two transition calls.",
  "date": "2026-07-17",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Choose a positional record for one fixed request value, a class for related guarded state, the safer property surface, and the result of two transition calls."
  ],
  "replyTasks": {
    "learn:csharp/006:q1": []
  },
  "replyTaskState": {
    "learn:csharp/006:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/006/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/006/"
  },
  "archive": "# Notes: Public surface choice\n\n## Session summary\n\nPublished 2026-07-17. This is a light fresh transfer after successful C# 005 retrieval. It uses a non-shipping domain to test one fixed request-value choice, one related guarded-state class choice, the safer public property surface, and a supplied two-call trace. No code construction is required.\n\n## Reply task\n\n- ID: `[learn:csharp/006:q1]`\n- Difficulty: 3/5\n- Exact task: using supplied domain facts and candidate type/property surfaces, make two type choices with short reasons, choose between public and private setters for `Status`, and predict the Boolean result and final status for two sequential calls to the supplied `Confirm()` method.\n- Copy template is self-contained: it includes the ID, both domain descriptions, permitted type choices, both property choices, the complete transition method and initial status, constraints, four prompts, and answer fields.\n\n## Expected reasoning\n\n- Use a `record` for `TableBookingRequest` because this design treats it as one fixed request-shaped value supplied as a whole.\n- Use a `class` for `TableBooking` because one continuing booking has guarded changing state.\n- Choose `public string Status { get; private set; }`. Callers may read the status but cannot assign it directly and bypass `Confirm()`.\n- A new booking begins at `\"Pending\"`.\n- First `Confirm()` call: the guard is false, the method sets status to `\"Confirmed\"`, and returns `true`; final status is `\"Confirmed\"`.\n- Second `Confirm()` call: the guard is true, the method returns `false` before assignment; final status remains `\"Confirmed\"`.\n\n## Acceptable variants\n\n- “Value equality,” “value-shaped request,” “fixed input,” or “compact data carrier” can justify the record choice, provided the answer does not claim that every record is immutable.\n- “Lifecycle,” “identity,” “changing/guarded state,” or “the method controls change” can justify the class choice.\n- “Choice 2,” “private setter,” or the complete property declaration are equivalent.\n- Boolean values may be written as `true`/`false` or true/false. Status quotes and capitalization are not grading targets when the state prediction is unambiguous.\n\n## Likely misconception\n\n- A record can never change, rather than this positional record being used as a fixed request value in this design.\n- `private set` prevents the class's own method from changing the property.\n- A public setter is safe because `Confirm()` also exists; callers could bypass the method entirely.\n- The second call sets the status again or resets it, rather than returning at the guard.\n- The final status is the same thing as the returned Boolean.\n\n## Next hint\n\nTrace one call at a time. Write the status before the call, evaluate `Status != \"Pending\"`, then follow either the early return or the assignment and final return.\n\n## Evaluation\n\nAnswered 2026-07-18. All four parts are correct.\n\n- Response: chose a positional `record` for `TableBookingRequest` because it is supplied as a whole and unchanged; chose a `class` for `TableBooking` because `Confirm()` changes its status; chose choice 2 because it keeps the change logic inside the class and narrows the public API; predicted `true` then `false`, with final status `Confirmed` after both calls.\n- Feedback: secure new evidence for the guarded property surface and sequential guarded-state trace. The reason for choice 2 is correct; callers can read `Status` but cannot assign it and bypass `Confirm()`.\n- Next: C# 006 is complete. The next C# contact may move to a small model-construction task.\n\n## Resurfacing\n\n- 2026-07-18: assigned the existing four-part checkpoint as the sole catch-up action. Preserved the canonical page, task wording, and permanent ID; no new assessment or model was added while this reply remains outstanding.\n"
};
