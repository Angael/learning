import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:dotnet/006",
  "topic": "dotnet",
  "number": "006",
  "type": "practice",
  "title": "Generic service registration",
  "summary": "Explain why AddSingleton<AppInfo>() works: the generic method contains logic, and the type argument supplies service metadata.",
  "date": "2026-07-10",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Explain why AddSingleton<AppInfo>() works: the generic method contains logic, and the type argument supplies service metadata."
  ],
  "replyTasks": {
    "learn:dotnet/006:q1": []
  },
  "replyTaskState": {
    "learn:dotnet/006:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/dotnet/sessions/006/",
    "canonicalUrl": "https://learn.widacki.me/topics/dotnet/sessions/006/"
  },
  "archive": "# Notes: Generic service registration\n\n## Session summary\n\nPublished 2026-07-10 as compact repair after Angeal asked how `builder.Services.AddSingleton<AppInfo>();` can do real work when it appears to pass only a generic type and no visible logic.\n\nCore points:\n\n- Logic is inside `AddSingleton<TService>()`, not inside the type argument.\n- `AppInfo` fills generic type slot `TService`.\n- In .NET, type metadata is available enough for framework code to store `typeof(TService)`.\n- DI registration mainly stores instructions/descriptor: service type, implementation type, lifetime.\n- Object usually created later when container resolves dependency.\n- Includes service lifetime nuance: Transient is not inherently faster; choose by identity/state/lifetime coupling.\n\n## Student response\n\nOn 2026-07-10, Angeal chose not to answer `[learn:dotnet/006:q1]` and asked to leave the session for another time.\n\nReason: basic DI and service registration make sense, but this session went too deep into a specific framework mechanism before enough C# foundation. Treat as sequencing feedback, not failed work. Do not resurface this checkpoint until stronger C# fundamentals make the runtime detail useful.\n\nExpected transfer checkpoint:\n\n1. Descriptor stores at least service type, implementation type, and singleton lifetime. Accept equivalent wording that preserves type-to-create and reuse policy.\n2. Handler parameter requests `StatusFormatter`; container finds descriptor, constructs it if singleton not created yet (including resolvable constructor dependencies), caches it, and supplies it to handler. Later requests reuse it.\n3. `AddSingleton<TService>()` runs registration logic; `StatusFormatter` supplies the type argument/type metadata used by that method. The type argument does not itself execute registration code.\n\nDifficulty target: 3/5. Require a causal runtime explanation, not three phrases copied from session.\n\n## Watch\n\n- If student says type argument “runs code,” repair: method runs code; type argument supplies type information.\n- If student maps from TypeScript too strongly, emphasize .NET keeps type metadata available to reflection/framework APIs.\n- Keep source-code details light; avoid deep overload matrix.\n"
};
