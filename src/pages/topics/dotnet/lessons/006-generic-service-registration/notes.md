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

On 2026-07-10, Angeal chose not to answer `[learn:dotnet/006:q1]` and asked to leave the lesson for another time.

Reason: basic DI and service registration make sense, but this lesson went too deep into a specific framework mechanism before enough C# foundation. Treat as sequencing feedback, not failed work. Do not resurface this checkpoint until stronger C# fundamentals make the runtime detail useful.

Expected transfer checkpoint:

1. Descriptor stores at least service type, implementation type, and singleton lifetime. Accept equivalent wording that preserves type-to-create and reuse policy.
2. Handler parameter requests `StatusFormatter`; container finds descriptor, constructs it if singleton not created yet (including resolvable constructor dependencies), caches it, and supplies it to handler. Later requests reuse it.
3. `AddSingleton<TService>()` runs registration logic; `StatusFormatter` supplies the type argument/type metadata used by that method. The type argument does not itself execute registration code.

Difficulty target: 3/5. Require a causal runtime explanation, not three phrases copied from lesson.

## Watch

- If student says type argument “runs code,” repair: method runs code; type argument supplies type information.
- If student maps from TypeScript too strongly, emphasize .NET keeps type metadata available to reflection/framework APIs.
- Keep source-code details light; avoid deep overload matrix.
