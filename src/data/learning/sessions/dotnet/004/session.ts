import type { ILearningSession } from '../../../types.ts';

export const session: ILearningSession = {
  "id": "learn:dotnet/004",
  "topic": "dotnet",
  "number": "004",
  "type": "lesson",
  "title": "Service lifetimes",
  "summary": "Choose Singleton, Scoped, or Transient by reasoning about how long an object should live and what state it can safely remember.",
  "date": "2026-07-09",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Choose Singleton, Scoped, or Transient by reasoning about how long an object should live and what state it can safely remember."
  ],
  "replyTasks": {},
  "replyTaskState": {},
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/dotnet/sessions/004/",
    "canonicalUrl": "https://learn.widacki.me/topics/dotnet/sessions/004/"
  },
  "archive": "# Notes: Service lifetimes\n\n## Session summary\n\nPublished on 2026-07-09. Workday .NET continuation after DI/config checkpoint. Starts by reinforcing student was right: `AppClock` was registered with `AddSingleton<AppClock>()`; DI container creates one instance and reuses it; handler does not create it.\n\nIntroduces lifetimes from first principles: how long an object should live and what state it may safely remember.\n\n- Singleton: one instance for app lifetime. Good for stateless/app-wide services, clocks/options-like services, caches if safe.\n- Scoped: one instance per request. Good for DB context/unit of work/request audit/current request data.\n- Transient: new when requested. Good for tiny stateless helpers where identity/state irrelevant.\n\n## Student response\n\nAnswered 2026-07-09. Checkpoint asks classify:\n\n1. `PricingRules`: fixed rules loaded at startup; no per-request state.\n2. `OrderDbContext`: tracks database changes during one HTTP request.\n3. `EmailSubjectFormatter`: tiny stateless string helper.\n\nStudent answered:\n\n1. `PricingRules`: Singleton, because rules are static between routes/requests, loaded once, and do not change. Correct. Tighten wording: not static variable necessarily; app-wide immutable service/config/rules object.\n2. `OrderDbContext`: Scoped, because it tracks one request and may cache/change-track within that request. Correct. Typo only: cache.\n3. `EmailSubjectFormatter`: Transient, because it is a clean/stateless helper and cheap to create. Correct for the session default. Important nuance: transient is not chosen for performance. It may allocate more than singleton; it is chosen because identity/state do not matter and it avoids accidental shared state/lifetime coupling. Singleton can also be safe for pure stateless helpers if dependencies are singleton-safe.\n\nExpected: Singleton, Scoped, Transient. Accept Singleton for stateless formatter if reason is good, but teach default: transient is fine for lightweight stateless helper; singleton also safe if no captured state/dependencies.\n\n## Watch\n\n- Keep distinction: DI creation vs lifetime reuse.\n- Watch for “singleton = static/global variable.” Better: container-managed single instance.\n- Watch for “scoped = user session.” Correct: usually request scope in web apps, not browser session.\n- Watch for overly rigid transient rule. Stateless can often be singleton too; choice depends on dependencies and cost. For beginner checkpoint, use transient as default for small helpers.\n\n## Next hints\n\n- If checkpoint solid: move toward data access/validation, or small API structure where services live.\n- If fuzzy: give one request timeline showing which objects are reused between request A and request B.\n"
};
