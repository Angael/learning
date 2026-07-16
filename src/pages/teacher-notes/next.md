# Next learning sessions

- Date: 2026-07-16
- Status: planned
- Weekly note: [2026-W29](/teacher-notes/weekly/2026-W29/)

## Block 1

- Topic / type: .NET / scaffolded request-boundary reading and validation
- Outcome: identify how a supplied `ShippingAddress` positional record enters one Minimal API handler, distinguish C# non-nullable annotations from runtime validation, and predict the response for one valid body and one body with a blank required field.
- Evidence: [C# 005 notes](/topics/csharp/sessions/005-api-models-records-and-classes/notes/), [.NET 001 notes](/topics/dotnet/sessions/001-your-first-minimal-api/notes/), and [.NET 005 notes](/topics/dotnet/sessions/005-program-structure-extension-methods/notes/). C# 005 retrieval secured the address-record rationale and basic guarded-state reasoning; the next useful evidence is a bounded API-boundary transfer, not more record/class explanation.
- Scope limit: supply the record and endpoint; use code reading and two response predictions, one inline `string.IsNullOrWhiteSpace` check, and no full project construction, `Parcel` transition, DataAnnotations, FluentValidation, endpoint filters, persistence, services, DI internals, JSON internals, typed-result generics, or `.NET 006` generic-registration retrieval.
- Session: new `/topics/dotnet/sessions/007-request-model-validation/`
- Reply ID: learn:dotnet/007:q1

## Block 2

- Topic / type: German / short spaced constrained production
- Outcome: write three or four recent-life sentences with supplied vocabulary, including at most two Perfekt forms, one `weil` or `dass` clause with verb-final order, and one transformation that replaces exactly one Dativ or Akkusativ noun phrase with a pronoun.
- Evidence: [German 004 notes](/topics/german/sessions/004-dative-accusative-pronouns/notes/), [German 002 notes](/topics/german/sessions/002-weekend-update-subordinate-clauses/notes/), and [German plan](/topics/german/plan/). The single-pronoun choice and repaired pronoun-before-Dativ-noun order succeeded; the pattern is ready for spaced supported production, while unsupported tense and clause control remain unproven.
- Scope limit: teach through Polish; keep a compact case/pronoun reference beside the task; supply article/gender, Polish meaning, and useful verb forms; use different lexical material in worked and assessed items; exactly one pronoun per transformed sentence; no two-pronoun order, possessives, `ob`, open dialogue, broad tense review, or substantial writing block.
- Session: new `/topics/german/sessions/005-recent-life-spaced-production/`
- Reply ID: learn:german/005:q1

## Implementation

- Status: implemented
- Sessions: [/topics/dotnet/sessions/007-request-model-validation/](/topics/dotnet/sessions/007-request-model-validation/); [/topics/german/sessions/005-recent-life-spaced-production/](/topics/german/sessions/005-recent-life-spaced-production/)
- Review: two read-only advisers checked content accuracy and exercise quality; technical and linguistic keys, cognitive load, and self-contained reply templates were incorporated.
- Commit: this implementation commit
