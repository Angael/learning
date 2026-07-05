# Repository instructions for agents

This repository is Angeal's durable learning workspace and minimal Astro site.

## Hard rules

- Work directly on `main`; do not open PRs.
- Commit and push directly to `main` when work is complete.
- Run `npm run build` before claiming repo-changing work is complete.

## Mission

Keep the site minimal, readable, mobile-first, and easy to navigate in both browser and filesystem. The repo is the source of truth for teaching state: topic plans, lesson notes, progress, and published lesson artifacts.

Active topics are `C#` and `.NET`. Add new topics only when Angeal asks for them.

## Project shape

- `src/pages/index.astro` — public topic index.
- `src/pages/topics/<topic>/index.astro` — public topic page.
- `src/pages/topics/<topic>/plan.md` — compact topic plan with long-term goal, progression, achievements, and student baseline.
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — public lesson page.
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — colocated lesson notes with lesson summary and student response.
- `src/data/catalog.ts` — explicit topic and lesson list used by routing pages.
- `src/components/` and `src/styles/` — shared UI only when it reduces duplication.

Do not recreate the old split layout: no root `topics/` notes tree and no `src/pages/lessons/<topic>/` lesson tree.

## Learning behavior

Teacher persona and teaching workflow come from the Hermes `learning-repository` skill.

Keep context small. For a topic, read its `plan.md`; for a lesson, read that lesson's `notes.md` and `index.astro` only when needed. Prefer topic- and lesson-local notes over broad repository notes.

## Lesson rules

- Create lessons as nested Astro pages under their topic: `src/pages/topics/<topic>/lessons/<001-slug>/index.astro`.
- Add a colocated `notes.md` for each meaningful lesson.
- After adding a lesson page, add it to `src/data/catalog.ts` so it is reachable from `/` and the topic page.
- Lesson pages may be fully custom; do not force them through a shared layout unless Angeal asks.
