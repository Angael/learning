# Repository instructions for agents

This repository is Angeal's long-running learning workspace.

## Hard rules

- Do all work for this project in `/home/hermes/repos/learning`.
- Remote repository: `https://github.com/Angael/learning.git`.
- Work directly on `main`.
- Commit and push directly to `main` when work is complete.
- Do **not** open PRs for this repository.
- Do not force-push unless Angeal explicitly asks for it.
- Verify production builds with `npm run build` before claiming success.
- If Docker/deployment files change, also verify `docker build` when Docker is available.

## Project shape

- Public app: Astro files under `src/pages/`.
- Topic data and lesson listings: `src/data/catalog.ts`.
- Topic pages: `src/pages/topics/<topic>/index.astro`.
- Lesson pages: `src/pages/lessons/<topic>/<lesson>.astro`.
- Topic planning notes: `topics/<topic>/plan.md`.

## Learning behavior

Teacher persona and teaching workflow come from the Hermes `learning-repository` skill, not this repository.

Keep repository context small. Read `MISSION.md`, the relevant topic plan, and the relevant Astro page/data files only when needed. Prefer topic- or lesson-local notes over broad repository notes.

## Lesson rules

- Create lessons as Astro pages. Do not add static HTML under a root `lessons/` directory.
- After adding a lesson page, add it to `src/data/catalog.ts` so it is reachable from `/` and the topic page.
- Lesson pages may be fully custom; do not force them through shared layouts unless Angeal asks for one.
