import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/003",
  "topic": "csharp",
  "number": "003",
  "type": "lesson",
  "title": "Static and instance members",
  "summary": "Use one small class to distinguish object-owned state and behavior from type-owned static behavior, then predict and repair calls.",
  "date": "2026-07-11",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Use one small class to distinguish object-owned state and behavior from type-owned static behavior, then predict and repair calls."
  ],
  "replyTasks": {
    "learn:csharp/003:q1": []
  },
  "replyTaskState": {
    "learn:csharp/003:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/003/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/003/"
  },
  "archive": "# Notes: static and instance members\n\n## Session summary\n\nPublished 2026-07-11. One `Workout` class establishes constructor-created instance state, read-only properties, one instance method, and one static method. Core distinction: instance member belongs to one object; static member belongs to type. Avoid lifetime/global metaphors.\n\n## Reply task\n\n- ID: `[learn:csharp/003:q1]`\n- Difficulty: 3/5\n- Exact task: predict two valid output lines; classify `Name`, `Minutes`, `Describe`, and `IsLong` by ownership; repair `Workout.Describe()` and `swim.IsLong(20)`; explain different receivers.\n- Copy template is embedded in session and begins with permanent ID.\n\n## Expected reasoning\n\n- Output: `Swim: 50 minutes`, then `True`.\n- `Name`, `Minutes`, and `Describe` belong to each instance.\n- `IsLong` belongs to `Workout` type and gets required value as argument.\n- Repairs: `swim.Describe();` and `Workout.IsLong(20);`.\n- Instance receiver selects object whose state method uses. Type receiver selects behavior with no implicit current object.\n\n## Acceptable variants\n\n- Any named `Workout` instance can repair first invalid call if learner explains choice.\n- `Console.WriteLine` around repaired expressions acceptable.\n- “Shared/type-level” accepted for static if explanation does not claim separate per-object copies.\n\n## Likely misconception\n\n- Static means global, outside class, or lives longer than objects.\n- Instance method callable on class without selecting object.\n- Static method has access to current object state without argument.\n\n## Next hint\n\nRead expression left of dot. Object variable means one instance. Class name means type-owned static member. Ask what data method receives implicitly before discussing syntax.\n\n## Student response\n\n- 2026-07-11 — Angeal marked `[learn:csharp/003:q1]` complete without answering its prompts, reporting that the questions are trivial and that they understand basic static classes and basic static methods.\n\n## Evaluation\n\n- Completed by learner self-assessment; no written retrieval evidence was collected for the instance-versus-static distinctions in this session.\n- Treat basic static classes and methods as covered. Recheck only through a more demanding transfer task if later C# work makes the distinction consequential.\n"
};
