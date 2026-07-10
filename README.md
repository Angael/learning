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
- `src/pages/topics/<topic>/plan.md` — durable topic goal, baseline, progression, and achievements
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — lesson page
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — exact lesson evidence and student response
- `src/pages/topics/<topic>/tasks/<YYYY-MM-DD-slug>/notes.md` — exact evidence for Discord-only diagnostics and tasks
- `src/pages/teacher-notes/next.md` — dated planning-to-production handoff
- `src/pages/teacher-notes/weekly/` — public weekly synthesis and multi-week outlook
- `src/data/catalog.ts` — explicit topic and lesson list used by routing pages
- `AGENTS.md` — repository rules, state ownership, and layout contract for agents

## Current scope

Active topics:

- `C#`
- `.NET`
- `German`

Learning state has separate owners to avoid drift: lesson notes store exact evidence, weekly notes synthesize current cross-topic state, topic plans store durable direction, and `next.md` stores only the next dated implementation handoff.

Teacher notes are published under `https://learn.widacki.me/teacher-notes/`.

## Deployment

Docker image builds static Astro output and serves it with nginx on port 80.
