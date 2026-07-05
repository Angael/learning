# Learning

A minimal Astro site and repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — start local development server
- `npm run build` — verify production build
- `npm run preview` — preview the built site locally
- `docker build -t learning .` — build the production container

## Structure

- `src/pages/index.astro` — mobile-first routing index
- `src/pages/topics/<topic>/index.astro` — topic routing pages
- `src/pages/lessons/<topic>/<lesson>.astro` — fully custom lesson pages
- `src/data/catalog.ts` — topic and lesson list used by routing pages
- `topics/<topic>/plan.md` — compact topic-specific plan and notes
- `MISSION.md` — sparse repository mission and current scope
- `RESOURCES.md` — external references when needed

## Current scope

Active topics are `C#` and `.NET`. Add new topics only when Angeal asks for them.

## Deployment

The Docker image builds static Astro output and serves it with nginx on port 80.
