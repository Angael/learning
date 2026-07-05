# Topic plan: C#

## End goal

Angeal can read, write, and debug modern C# confidently enough to build .NET APIs without treating the language as magic or ceremony.

## Starting point

Baseline from 2026-07-05 grill:

- Used C# lightly about 8 years ago for Unity and small Windows apps; remembers little now.
- Strong JS/TS and backend API background; comfortable terminal/Git user.
- Wants .NET APIs and native Windows context when useful; explicitly does not want Blazor.
- Knows the rough ecosystem split: C# language, .NET platform, ASP.NET Core web stack, IDEs/editors.
- Has useful but fuzzy mental models around stack/heap, classes, methods, access modifiers, and `static`.
- Needs targeted correction around numeric operations, type inference, runtime model, value/reference types, nullability, and how C# classes/interfaces differ from TS/JS habits.

## Teaching stance

Teach this as **C# for TypeScript/backend developers**, not C# from zero.

Avoid:

- Blazor unless Angeal explicitly asks.
- Beginner programming filler.
- IDE-first workflows.

Prefer:

- Terminal-first `dotnet` examples.
- Direct comparisons to TypeScript/JavaScript where they reveal real differences.
- Small executable snippets with prediction questions before explanations.
- Backend/API relevance, especially where C# choices affect ASP.NET Core code.

## Progression

1. C# execution model: source, project, compiler, IL, runtime, SDK vs runtime.
2. Types and variables: explicit types, `var`, value/reference types, strings, boxing, numeric division.
3. Nullability and errors: nullable reference types, `?`, `!`, exceptions vs result-style habits.
4. Functions and methods: static methods, instance methods, extension methods, top-level statements.
5. Classes without ceremony: state, constructors, records, object initializers, properties vs fields.
6. Interfaces and generics: compare with TypeScript structural typing and Rust traits.
7. Collections and LINQ: arrays, lists, dictionaries, `IEnumerable<T>`, query pipelines.
8. Async C#: `Task`, `async`/`await`, cancellation tokens, API handler consequences.
9. Testing and debugging: `dotnet test`, assertions, stepping/debug symbols when needed.
10. Bridge into ASP.NET Core: DTOs, validation, dependency injection, configuration.

## Achievements

- [x] Predict the result of integer division and explain why `5 / 2` is not `2.5`.
- [x] Explain when `var` is static type inference rather than JS-style dynamic typing.
- [ ] Distinguish value types, reference types, and nullable reference types in practical code.
- [ ] Write a small class or record only where it improves the model.
- [ ] Explain `static` without saying it "lives outside the lifecycle of one class".
- [ ] Translate a TypeScript DTO/service mental model into idiomatic C#.
- [ ] Read a small ASP.NET Core endpoint and identify the C# language features involved.

## Lesson notes

- 2026-07-05: Topic created after baseline grill. Best starting lesson: integer division + `var` + static typing, because Angeal correctly expects a division result but is unsure whether C# casts like JS/TS or rejects compilation.
- 2026-07-05: Grill progress: Angeal correctly settled on `5 / 2` printing `2`; learned that `var` is compile-time static inference, not JS-style dynamic binding; corrected `5.0` from `float` to `double`; identified `5m` as `decimal`; correctly reasoned that `decimal * double` is a compile-time error and that `int / double` produces a `double` result. Began value/reference type discussion: correctly predicted `int` assignment copies and `List<int>` references share mutation; corrected misconception that string reference assignment plus `ToUpper()` mutates both variables. Angeal asked to stop the grill for today and continue next time.
- 2026-07-05: Published lesson 1, "var and numeric types." Next session should start with the retrieval checkpoint from that lesson, then continue into value vs reference types and method-call mutation/reassignment.
