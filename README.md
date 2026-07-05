# Astro Learning Lab

A deployable Astro project and durable teaching workspace for Angeal.

## Commands

- `npm run dev` — start local development server
- `npm run build` — verify production build
- `npm run preview` — preview the built site locally
- `docker build -t learning .` — build the production container

## Structure

- `topics/` — long-running topic tracks with mutable plans and achievements
- `lessons/` — HTML lesson artifacts, grouped by topic
- `docs/teacher-notes/` — compact notes for the teacher to reload context quickly
- `learning-records/` — durable records of non-obvious learning progress
- `reference/` — reusable cheat sheets and reference documents

## Deployment

The Docker image builds static Astro output and serves it with nginx on port 80, suitable for Dokploy.
