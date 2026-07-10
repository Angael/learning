# Notes: Generic service registration

## Lesson summary

Published 2026-07-10 as compact repair after Angeal asked how `builder.Services.AddSingleton<AppInfo>();` can do real work when it appears to pass only a generic type and no visible logic.

Core points:

- Logic is inside `AddSingleton<TService>()`, not inside the type argument.
- `AppInfo` fills generic type slot `TService`.
- In .NET, type metadata is available enough for framework code to store `typeof(TService)`.
- DI registration mainly stores instructions/descriptor: service type, implementation type, lifetime.
- Object usually created later when container resolves dependency.
- Includes service lifetime nuance: Transient is not inherently faster; choose by identity/state/lifetime coupling.

## Student response

Pending.

Expected checkpoint:

1. Logic is in `AddSingleton`, not `AppInfo`.
2. `AppInfo` gives the method service type/runtime type metadata; acceptable wording: type to register.
3. Registration stores instructions for the container; singleton object may be created later when first needed / provider validates / resolves, but beginner answer should be “stores instructions, not mainly create now.”

## Watch

- If student says type argument “runs code,” repair: method runs code; type argument supplies type information.
- If student maps from TypeScript too strongly, emphasize .NET keeps type metadata available to reflection/framework APIs.
- Keep source-code details light; avoid deep overload matrix.
