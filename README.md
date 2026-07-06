# Learning

A minimal Astro site and repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — start local development server
- `npm run build` — verify production build
- `npm run preview` — preview built site locally
- `docker build -t learning .` — build production container

## Structure

- `src/pages/index.astro` — topic index
- `src/pages/topics/<topic>/index.astro` — topic page
- `src/pages/topics/<topic>/plan.md` — topic goal, baseline, progression, achievements
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — lesson page
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — lesson summary and student response
- `src/data/catalog.ts` — explicit topic and lesson list used by routing pages
- `teacher-notes/weekly/` — compact internal teacher history, Telegraph English
- `AGENTS.md` — repository rules, mission, and layout contract for agents

## Current scope

Active topics:

- `C#`
- `.NET`
- `German`

Internal teaching state lives in topic plans, lesson notes, and weekly logs. Weekly logs stay compact and use Telegraph English.

## Deployment

Docker image builds static Astro output and serves it with nginx on port 80.
