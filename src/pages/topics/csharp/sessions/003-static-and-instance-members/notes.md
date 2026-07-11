# Notes: static and instance members

## Session summary

Published 2026-07-11. One `Workout` class establishes constructor-created instance state, read-only properties, one instance method, and one static method. Core distinction: instance member belongs to one object; static member belongs to type. Avoid lifetime/global metaphors.

## Reply task

- ID: `[learn:csharp/003:q1]`
- Difficulty: 3/5
- Exact task: predict two valid output lines; classify `Name`, `Minutes`, `Describe`, and `IsLong` by ownership; repair `Workout.Describe()` and `swim.IsLong(20)`; explain different receivers.
- Copy template is embedded in session and begins with permanent ID.

## Expected reasoning

- Output: `Swim: 50 minutes`, then `True`.
- `Name`, `Minutes`, and `Describe` belong to each instance.
- `IsLong` belongs to `Workout` type and gets required value as argument.
- Repairs: `swim.Describe();` and `Workout.IsLong(20);`.
- Instance receiver selects object whose state method uses. Type receiver selects behavior with no implicit current object.

## Acceptable variants

- Any named `Workout` instance can repair first invalid call if learner explains choice.
- `Console.WriteLine` around repaired expressions acceptable.
- “Shared/type-level” accepted for static if explanation does not claim separate per-object copies.

## Likely misconception

- Static means global, outside class, or lives longer than objects.
- Instance method callable on class without selecting object.
- Static method has access to current object state without argument.

## Next hint

Read expression left of dot. Object variable means one instance. Class name means type-owned static member. Ask what data method receives implicitly before discussing syntax.

## Student response

Awaiting response.
