# Learning repository

Angeal's durable learning workspace and minimal Astro site: https://learn.widacki.me/.

## Hard rules

- Work directly on `main`; no PRs or force-push unless explicitly requested.
- Run `npm run check`, then commit and push completed repository changes.

## Project shape

- `src/pages/index.astro` — topic index
- `src/pages/topics/<topic>/index.astro` — topic page
- `src/pages/topics/<topic>/plan.md` — durable topic direction and topic-specific teaching policy
- `src/pages/topics/<topic>/sessions/<NNN-slug>/index.astro` — learner-facing learning event; teaching, practice, tasks, tests, diagnostics,  repairs
- `src/pages/topics/<topic>/sessions/<NNN-slug>/notes.md` — teacher notes, exact evidence, response history for that event
- `src/pages/teacher-notes/next.md` — dated planning-to-production handoff
- `src/pages/teacher-notes/weekly/YYYY-Www.md` — rolling synthesis, coverage, open loops, and 3–6 week outlook
- `src/data/catalog.ts` — public topics and sessions
- `src/components/` — shared page, session, and content components

## Content rules

- A session is one published learning event, not a content type. It may be explanation-only, assessment-only, or mixed.
- Every assigned action must appear on a session `index.astro` page before delivery. Related actions and repairs may share or update one page.
- Sessions and response tasks use permanent `[learn:...]` IDs.
- Public links target session pages, never `/notes/` or GitHub source.
- Every session directory has both `index.astro` and `notes.md`, and every public session is cataloged.
- Internal notes use Telegraph English. Learner-facing content follows the topic plan's language policy.
- Use `SessionPage`, `SessionSection`, `SessionGrid`, `SessionList`, `Code`, `Callout`, `CommandList`, `TagList`, and `ReplyTask` rather than one-off markup.
- Use `Code.astro` for code samples; do not import Shiki or render plain `<pre><code>` for code sessions.
- Every response request uses `ReplyTask` with a permanent ID. Never renumber published IDs.
- Copied templates include the ID and enough context to answer without reconstructing the prompt.
- Keep session-specific CSS out by default and do not add eyebrow/kicker headers.
- Sort session lists newest-first; show number and date, all sessions on topic pages, and at most three per topic on home.
