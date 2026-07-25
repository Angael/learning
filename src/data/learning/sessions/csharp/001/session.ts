import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:csharp/001",
  "topic": "csharp",
  "number": "001",
  "type": "lesson",
  "title": "var and numeric types",
  "summary": "Learn why C# var is static inference, why integer division prints 2, and how int, double, float, and decimal interact.",
  "date": "2026-07-05",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Learn why C# var is static inference, why integer division prints 2, and how int, double, float, and decimal interact."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/csharp/sessions/001/",
    "canonicalUrl": "https://learn.widacki.me/topics/csharp/sessions/001/"
  },
  "archive": "# Notes: var and numeric types\n\n## Session summary\n\nPublished on 2026-07-05. This session teaches that C# `var` is compile-time static type inference, not JavaScript-style dynamic binding. It covers integer division, numeric literal defaults, `int`, `double`, `float`, `decimal`, and why `decimal * double` is a compile-time error.\n\n## Student response\n\nDuring the grill, Angeal correctly settled on `5 / 2` printing `2`, learned that `var` is static inference, corrected `5.0` from `float` to `double`, identified `5m` as `decimal`, correctly reasoned that `decimal * double` is a compile-time error, and correctly predicted that `int / double` produces a `double` result.\n"
};
