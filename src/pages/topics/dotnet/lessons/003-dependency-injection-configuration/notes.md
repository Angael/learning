# Notes: Dependency injection and configuration

## Lesson summary

Published on 2026-07-08. Light workday .NET continuation after request-pipeline lesson. Starts with retrieval correction: `await next(context)` advances to next pipeline step, not necessarily directly next handler. Introduces configuration vs dependency injection through one small `/time` endpoint refactor.

## Student response

Recorded on 2026-07-08 from Discord checkpoint reply:

1. Configuration understood as the place for environment-dependent values, so localhost/dev/beta/prod can use same code with different settings. Also connected it to easier test injection.
2. Dependency injection understood as easier composition plus better separation of concerns, with testing benefits.
3. Correctly answered that the framework/DI container creates the registered object and route/controller code only declares what it needs; registrations define which concrete class/config shape to use.
4. Correctly explained testing value: tests target small units and can replace external services like DB connections with mocks/fakes so the test focuses on one fragment, not the whole stack.

Correction to reinforce: in the final example, `AppClock` is not itself a singleton unless registered that way; the shown singleton registration was for the options/settings object. The DI container still creates/provides the requested service object.

## Watch

- Keep DI first-principles: handlers ask for dependencies; container creates/provides them.
- Avoid lifetime rabbit hole until student answers checkpoint. Singleton shown only because example is stateless/options-like.
- Bridge to TS backend: comparable to registering app-wide services and passing dependencies instead of newing them inside route code.

## Next hints

- Checkpoint solid. Next: explain lifetimes `Singleton`, `Scoped`, `Transient` with backend examples, while keeping object-vs-registration wording precise.
- If fuzzy: repair distinction between configuration values and services/objects.
