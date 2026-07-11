# Notes: var and numeric types

## Session summary

Published on 2026-07-05. This session teaches that C# `var` is compile-time static type inference, not JavaScript-style dynamic binding. It covers integer division, numeric literal defaults, `int`, `double`, `float`, `decimal`, and why `decimal * double` is a compile-time error.

## Student response

During the grill, Angeal correctly settled on `5 / 2` printing `2`, learned that `var` is static inference, corrected `5.0` from `float` to `double`, identified `5m` as `decimal`, correctly reasoned that `decimal * double` is a compile-time error, and correctly predicted that `int / double` produces a `double` result.
