# Mission

This repository is Angeal's durable learning workspace and Astro site.

The public app is for routing through topics and Astro lesson pages. Keep it minimal, readable, mobile-first, and easy to extend.

## Current scope

- Active topics: `C#` and `.NET`.
- Lessons are published as Astro pages under `src/pages/lessons/<topic>/`.
- Topic routing pages live under `src/pages/topics/<topic>/`.
- Shared topic/lesson listings live in `src/data/catalog.ts`.
- Topic-specific planning notes live under `topics/<topic>/plan.md`.

## Success criteria

- `npm run build` succeeds.
- Every published lesson is reachable from `/`.
- Lessons are free to define their own page structure and styling.
- Repository-level notes stay small; topic and lesson notes carry local context.
