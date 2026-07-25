# Learning

A minimal Astro site and typed, repo-backed learning workspace for Angeal.

## Commands

- `npm run dev` — local development server
- `npm run check` — validate typed records and build production output
- `learning sessions` — compact history across all topics
- `learning sessions <topic>` — compact topic history
- `learning sessions <topic> <number>` — one typed session record
- `learning sessions <topic> --create` — create an unpublished typed scaffold

## Structure

Each learner-facing page has a numeric route and a matching typed record:

```text
src/pages/topics/<topic>/sessions/<NNN>/index.astro
src/data/learning/sessions/<topic>/<NNN>/session.ts
```

`session.ts` is the source of truth for session type, reason, prior evidence, reply history, evaluation, and future implications. `next.ts` and `weeks/*.ts` hold typed planning state. Old descriptive URLs remain as redirects to numeric canonical routes.

See `AGENTS.md` for the repository contract.
