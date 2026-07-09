# Notes: Service lifetimes

## Lesson summary

Published on 2026-07-09. Workday .NET continuation after DI/config checkpoint. Starts by reinforcing student was right: `AppClock` was registered with `AddSingleton<AppClock>()`; DI container creates one instance and reuses it; handler does not create it.

Introduces lifetimes from first principles: how long an object should live and what state it may safely remember.

- Singleton: one instance for app lifetime. Good for stateless/app-wide services, clocks/options-like services, caches if safe.
- Scoped: one instance per request. Good for DB context/unit of work/request audit/current request data.
- Transient: new when requested. Good for tiny stateless helpers where identity/state irrelevant.

## Student response

Pending. Checkpoint asks classify:

1. `PricingRules`: fixed rules loaded at startup; no per-request state.
2. `OrderDbContext`: tracks database changes during one HTTP request.
3. `EmailSubjectFormatter`: tiny stateless string helper.

Expected: Singleton, Scoped, Transient. Accept Singleton for stateless formatter if reason is good, but teach default: transient is fine for lightweight stateless helper; singleton also safe if no captured state/dependencies.

## Watch

- Keep distinction: DI creation vs lifetime reuse.
- Watch for “singleton = static/global variable.” Better: container-managed single instance.
- Watch for “scoped = user session.” Correct: usually request scope in web apps, not browser session.
- Watch for overly rigid transient rule. Stateless can often be singleton too; choice depends on dependencies and cost. For beginner checkpoint, use transient as default for small helpers.

## Next hints

- If checkpoint solid: move toward data access/validation, or small API structure where services live.
- If fuzzy: give one request timeline showing which objects are reused between request A and request B.
