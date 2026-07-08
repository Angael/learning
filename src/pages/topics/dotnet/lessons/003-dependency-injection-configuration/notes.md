# Notes: Dependency injection and configuration

## Lesson summary

Published on 2026-07-08. Light workday .NET continuation after request-pipeline lesson. Starts with retrieval correction: `await next(context)` advances to next pipeline step, not necessarily directly next handler. Introduces configuration vs dependency injection through one small `/time` endpoint refactor.

## Student response

Pending Discord checkpoint.

## Watch

- Keep DI first-principles: handlers ask for dependencies; container creates/provides them.
- Avoid lifetime rabbit hole until student answers checkpoint. Singleton shown only because example is stateless/options-like.
- Bridge to TS backend: comparable to registering app-wide services and passing dependencies instead of newing them inside route code.

## Next hints

- If checkpoint solid: explain lifetimes `Singleton`, `Scoped`, `Transient` with backend examples.
- If fuzzy: repair distinction between configuration values and services/objects.
