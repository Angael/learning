# Repository instructions for agents

Angeal's durable learning workspace and minimal Astro site: https://learn.widacki.me/.

## Hard rules

- Work directly on `main`; no PRs or force-push unless explicitly requested.
- Run `npm run check`, then commit and push completed repository changes.
- Keep the site minimal, readable, mobile-first, and easy to navigate in browser and filesystem.
- Load `teacher` for pedagogical work and only the specialized learning workflow required by the task.

## Project shape

- `src/pages/index.astro` — topic index.
- `src/pages/topics/<topic>/index.astro` — topic page.
- `src/pages/topics/<topic>/plan.md` — durable topic direction and topic-specific teaching policy.
- `src/pages/topics/<topic>/sessions/<NNN-slug>/index.astro` — learner-facing learning event; may combine teaching, practice, a task, test, diagnostic, or repair.
- `src/pages/topics/<topic>/sessions/<NNN-slug>/notes.md` — exact evidence and response history for that event.
- `src/pages/teacher-notes/next.md` — dated planning-to-production handoff.
- `src/pages/teacher-notes/weekly/YYYY-Www.md` — rolling synthesis, coverage, open loops, and 3–6 week outlook.
- `src/data/catalog.ts` — public topics and sessions.
- `src/components/` — shared page, session, and content components.

Do not recreate `tasks/`, root `teacher-notes/`, root `topics/`, `lessons/`, or `src/pages/sessions/<topic>/` trees.

## State ownership

- Session `notes.md`: exact prompt, permanent `[learn:...]` ID, response, correction, misconception, and next hint.
- Weekly note: concise cross-topic synthesis, coverage, backlog, weekly map, and outlook. Link evidence instead of copying it.
- Topic `plan.md`: long-term goal, baseline, progression, durable achievements, major plan changes, and topic-specific teaching policy—not daily picks.
- `next.md`: only the next dated execution handoff; never treat it as learning evidence.

Precedence: exact session evidence → latest weekly synthesis → topic plan. `next.md` is disposable scheduling state.

Follow-up updates matching session notes first, then weekly synthesis only when planning state changes. Planning updates weekly state and replaces `next.md`. Session production implements the handoff and marks it implemented. Change topic plans only for durable evidence or consequential goal/sequence changes.

## Context and planning

- Resolve exact `[learn:...]` IDs before reading broader context.
- Read only linked/current evidence; avoid broad scans.
- Internal notes and planning use Telegraph English.
- Learner-facing content follows the relevant topic plan's language policy.
- Discord is the main answer and feedback channel.
- Workdays normally have two blocks; weekends allow two longer or up to three purposeful blocks.
- Give every active topic meaningful weekly contact; avoid topic monopolies and repeated loops.
- Backlog reduces scope and novelty, not all momentum. Resurface one worthwhile item without guilt.
- Default exercises to difficulty 3/5 through transfer, explanation, comparison, debugging, or production.

## Session rules

- A session is one published learning event, not a content type. It may be explanation-only, assessment-only, or mixed.
- Every assigned action must appear on a session `index.astro` page before delivery. Related actions and repairs may share or update one page.
- Discord links to the session page, never `/notes/` or GitHub source.
- Every session directory has both `index.astro` and `notes.md`, and every public session is cataloged.
- Use `SessionPage`, `SessionSection`, `SessionGrid`, `SessionList`, `Code`, `Callout`, `CommandList`, `TagList`, and `ReplyTask` rather than one-off markup.
- Use `Code.astro` for code samples; do not import Shiki or render plain `<pre><code>` for code sessions.
- Every response request uses `ReplyTask` with a permanent ID. Never renumber published IDs.
- Copied templates include the ID and enough context to answer without reconstructing the prompt.
- Keep session-specific CSS out by default and do not add eyebrow/kicker headers.
- Sort session lists newest-first; show number and date, all sessions on topic pages, and at most three per topic on home.
