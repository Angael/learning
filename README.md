# Learning

A minimal Astro site and repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — start local development server
- `npm run build` — verify production build
- `npm run preview` — preview the built site locally
- `docker build -t learning .` — build the production container

## Structure

- `src/pages/index.astro` — topic index
- `src/pages/topics/<topic>/index.astro` — topic page
- `src/pages/topics/<topic>/plan.md` — topic goal, progression, achievements, and student baseline
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — lesson page
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — lesson summary and student response
- `src/data/catalog.ts` — explicit topic and lesson list used by routing pages
- `AGENTS.md` — repository rules, mission, and layout contract for agents

## Current scope

Active topics are `C#` and `.NET`. Add new topics only when Angeal asks for them.

## Deployment

The Docker image builds static Astro output and serves it with nginx on port 80.
