# Learning

A minimal Astro site and repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — local development server
- `npm run check` — validate session structure and build production output
- `npm run build` — build production output
- `npm run preview` — preview built output
- `docker build -t learning .` — build the production container

## Structure

Each topic lives under `src/pages/topics/<topic>/`. Its `plan.md` owns durable direction and topic-specific teaching policy. Every published learning event—teaching, practice, task, test, diagnostic, or repair—uses one colocated pair:

```text
sessions/<NNN-slug>/
├── index.astro
└── notes.md
```

`index.astro` is learner-facing; `notes.md` stores exact evidence. Weekly synthesis and the next production handoff live under `src/pages/teacher-notes/`.

See `AGENTS.md` for the complete repository and state-ownership contract.
