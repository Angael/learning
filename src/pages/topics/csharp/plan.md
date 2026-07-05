# Topic plan: C#

## Long-term goal

Angeal can read, write, and debug modern C# confidently enough to build .NET APIs without treating the language as magic or ceremony.

## Student baseline

Baseline from 2026-07-05 grill:

- Used C# lightly about 8 years ago for Unity and small Windows apps; remembers little now.
- Strong JS/TS and backend API background; comfortable terminal/Git user.
- Wants .NET APIs and native Windows context when useful; explicitly does not want Blazor.
- Knows the rough ecosystem split: C# language, .NET platform, ASP.NET Core web stack, IDEs/editors.
- Has useful but fuzzy mental models around stack/heap, classes, methods, access modifiers, and `static`.
- Needs targeted correction around numeric operations, type inference, runtime model, value/reference types, nullability, and how C# classes/interfaces differ from TS/JS habits.
- Teach this as C# for TypeScript/backend developers, not C# from zero.

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
