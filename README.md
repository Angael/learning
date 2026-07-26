# Learning

A minimal Astro site and typed, repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — local development server
- `pnpm check` — validate typed records and build production output
- `learning topics` — compact topic and curriculum-queue overview
- `learning topic <topic>` — one topic's goal, milestones, and queue
- `learning sessions <topic> <number>` — one typed session record
- `learning sessions <topic> --create` — create an unpublished typed scaffold

## Structure

Each learner-facing page has a numeric route and a colocated typed record:

```text
src/pages/topics/<topic>/sessions/<NNN>/
├── index.astro
└── _session.ts
```

`_session.ts` is the source of truth for session type, reason, prior evidence, reply history, evaluation, and future implications. Each topic's colocated `_topic.ts` holds durable planning state and its status-bearing curriculum queue; `weeks/*.ts` holds weekly synthesis rather than dated session assignments. Old descriptive URLs remain as redirects to numeric canonical routes.

See `AGENTS.md` for the repository contract.
