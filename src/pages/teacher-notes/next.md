# Next learning sessions

- Date: 2026-07-13 (Europe/Warsaw)
- Status: planned
- Weekly note: [2026-W29](/teacher-notes/weekly/2026-W29/)
- Capacity: workday

## Why this day

- Weekly balance: open W29 with C# foundation work and German contact; reserve one bounded .NET application for later in week.
- Recent sessions considered: [C# 004 notes](/topics/csharp/sessions/004-constructors-properties-and-state/notes/) and [German 003 notes](/topics/german/sessions/003-giving-and-returning-dialogue/notes/).
- Sequence judgment: replace duplicate receiver practice with a genuine public-API decision; extend successful noun-case work into one-pronoun-at-a-time transfer.

## Block 1

- Topic: C#
- Type: new concept
- Target: model an immutable API request and a stateful domain object; choose `record` or `class`, constrain mutation, and justify the public surface against a TypeScript comparison.
- Why now: session 004 confirmed separate object state but repeated static/receiver classification. Its recorded next step requires a new API/domain-modelling decision.
- Evidence links: [C# 004 notes](/topics/csharp/sessions/004-constructors-properties-and-state/notes/), [C# plan](/topics/csharp/plan/), [weekly note](/teacher-notes/weekly/2026-W29/)
- Prerequisites: nullable reference types; constructor-set per-object state; TypeScript DTO familiarity.
- Scope boundary: one transport model and one domain model, one invariant or state transition, and nominal-versus-structural typing. No receiver repair, record internals, inheritance, interfaces, generics, EF Core, serialization, endpoint code, or validation library.
- Session: new `/topics/csharp/sessions/005-api-models-records-and-classes/`
- Difficulty: 3/5
- Reply ID: learn:csharp/005:q1

## Block 2

- Topic: German
- Type: practice
- Target: repair noun-phrase identification, then replace one Dativ recipient or Akkusativ item at a time with `ihm`, `ihr`, `ihnen`, `ihn`, `sie`, or `es` in controlled transformations and one constrained sentence.
- Why now: session 003 showed reliable noun-article selection and recipient/item mapping. Focused pronouns are the next planned step; the only error was naming the verb phrase instead of the case-bearing noun phrases.
- Evidence links: [German 003 notes](/topics/german/sessions/003-giving-and-returning-dialogue/notes/), [German plan](/topics/german/plan/), [weekly note](/teacher-notes/weekly/2026-W29/)
- Prerequisites: identify recipient as Dativ and item as Akkusativ; consult noun-article and pronoun references.
- Scope boundary: replace one noun phrase at a time with supplied vocabulary. Formal `Ihnen` reference-only. No possessives, open dialogue, Perfekt, subordinate clauses, or dual-pronoun word order.
- Session: new `/topics/german/sessions/004-dative-accusative-pronouns/`
- Difficulty: 3/5
- Reply ID: learn:german/004:q1

## Backlog handling

- Pressure: medium
- One item to resurface: C# model design as the useful prerequisite for later .NET API work.
- Help or catch-up support: provide a constrained C# skeleton and compact German case/pronoun table with articles and Polish translations for non-tested vocabulary.
- Deliberately deferred: .NET 006 checkpoint and framework internals, C# interfaces/generics, German possessives, and combined open dialogue/Perfekt/subordinate-clause load.

## Implementation record

- Status: implemented
- Sessions: [C# 005](/topics/csharp/sessions/005-api-models-records-and-classes/); [German 004](/topics/german/sessions/004-dative-accusative-pronouns/)
- Commit: `4a4d527` (session production)
