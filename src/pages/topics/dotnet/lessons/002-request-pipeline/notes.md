# Notes: Request pipeline

## Lesson summary

Published on 2026-07-06. This lesson follows the successful route-vs-handler retrieval by introducing the ASP.NET Core request pipeline. It distinguishes middleware from endpoint handlers, explains `await next(context)`, shows short-circuiting, and ends with a retrieval checkpoint before advancing to configuration/DI.

## Student response

Recorded on 2026-07-06 from Discord checkpoint reply:

1. Middleware understood as a function that runs before and/or after handlers, can short-circuit, and is used for general cross-cutting concerns such as metrics, analytics, auth, and logging.
2. `await next(context)` understood as awaiting continuation to the next step. Correction to reinforce: it advances to the next pipeline step, which may be another middleware or eventually endpoint routing/handler, not necessarily directly to "the next handler".
3. Correctly understood that if middleware does not call `next`, the endpoint handler will not be called.

Student note: lesson felt easy because prior Hono and Express experience maps well to ASP.NET Core middleware concepts; main difference is C#/.NET syntax and pipeline conventions.
