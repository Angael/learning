# Repository instructions for agents

This repository is Angeal's durable learning workspace and minimal Astro site.
App is hosted at https://learn.widacki.me/.

## Hard rules

- Work directly on `main`; do not open PRs.
- Commit and push directly to `main` when work is complete.
- Run `npm run build` before claiming repo-changing work is complete.
- Do not force-push unless Angeal explicitly approves.

## Mission

Keep the site minimal, readable, mobile-first, and easy to navigate in browser and filesystem. The repository is the source of truth for teaching state and published artifacts.

Active topics: `C#`, `.NET`, `German`.

Load the Hermes `teacher` skill for pedagogical work. Load only the specialized learning skill needed for repository navigation, planning, lesson production, or follow-up.

## Project shape

- `src/pages/index.astro` — public topic index.
- `src/pages/topics/<topic>/index.astro` — public topic page.
- `src/pages/topics/<topic>/plan.md` — durable topic direction.
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — public lesson page.
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — exact lesson evidence and response history.
- `src/pages/topics/<topic>/tasks/<YYYY-MM-DD-slug>/notes.md` — exact evidence for Discord-only diagnostics, retrieval, and microtasks.
- `src/pages/teacher-notes/next.md` — dated handoff from planning to lesson production.
- `src/pages/teacher-notes/weekly/YYYY-Www.md` — rolling synthesis, coverage, open loops, and multi-week outlook.
- `src/data/catalog.ts` — explicit public topic and lesson list.
- `src/components/` — shared page, lesson, and content components.
- `src/styles/global.css` — global tokens, base defaults, and code styling.

Do not recreate old split layouts: no root `teacher-notes/`, root `topics/`, or `src/pages/lessons/<topic>/` tree.

## Teaching-state ownership

Keep one authoritative home for each kind of information:

- Lesson/task `notes.md`: exact task, question ID, student response, correction, misconception, and next hint.
- Weekly note: concise cross-topic synthesis, coverage ledger, backlog pressure, this week's map, and a rolling 3–6 week outlook. Reference lesson IDs/links instead of copying full responses.
- Topic `plan.md`: long-term goal, baseline, progression, durable achievements, and major plan changes. Do not put daily picks or transient backlog here.
- `src/pages/teacher-notes/next.md`: only the next dated execution handoff—blocks, scope, rationale, prerequisites, difficulty, reply IDs, and links to evidence. Do not restate full topic or weekly state.

Precedence when facts conflict: exact lesson evidence → latest weekly synthesis → topic plan. `next.md` never overrides learning evidence; it is disposable scheduling state.

Update rules:

- Follow-up work updates matching lesson/task notes first, then weekly synthesis if the evidence changes current planning.
- Planning updates the weekly map/outlook and replaces `next.md`; it does not rewrite topic plans casually.
- Lesson production marks `next.md` implemented and records artifacts; it does not invent a different curriculum.
- Change a topic plan only for a major achievement, sustained diagnostic evidence, or a consequential goal/sequence change. Record why.

## Context rules

- Scheduling: read `next.md`, current weekly note, then only relevant topic plans and lesson notes.
- Follow-up: resolve the exact `[learn:...]` ID first, then read only its lesson/task notes and current weekly note if state changes.
- Avoid broad scans. Prefer exact paths and links.
- Internal notes, weekly logs, research summaries, and rationale use Telegraph English.
- Public lessons stay clear; do not over-compress if clarity suffers.
- Discord is the main answer and feedback channel.

## Planning guardrails

- Workdays normally have two blocks: one primary progression block, usually new; one secondary retrieval, practice, repair, German production, or side learning block.
- Weekends are flexible: two longer blocks or up to three purposeful blocks. Prefer depth and application over unrelated new content.
- Every active topic gets meaningful contact across the week. Track recent lessons and avoid topic monopolies or repeated teaching loops.
- Backlog slows new material; it does not automatically stop learning. Shrink scope, use catch-up/help blocks, resurface one worthwhile open task, and motivate without guilt.
- Student questions are evidence, not automatic curriculum commands. Separate blockers, misconceptions, useful side learning, and tangents. Preserve major plans unless evidence warrants change.
- Exercises default to difficulty 3/5: require transfer, explanation, comparison, debugging, or production—not direct regurgitation alone.

## Lesson rules

- Create lessons under `src/pages/topics/<topic>/lessons/<001-slug>/index.astro`.
- Add colocated `notes.md` for each meaningful lesson.
- Add public lessons to `src/data/catalog.ts`.
- Use standard components unless a one-off is requested: `LessonPage`, `LessonSection`, `Code`, `Callout`, `LessonGrid`, `CommandList`, `TagList`, `ReplyTask`.
- Use `Code.astro` for code samples: `<Code code={example} lang="csharp" />`. Do not import Shiki or render plain `<pre><code>` blocks.
- Use `ReplyTask.astro` for every response request. Give it a permanent ID such as `learn:csharp/003:q1`; Discord-only tasks use `learn:YYYY-MM-DD:b1`. Never renumber a published ID.
- The copied template must include the ID and enough question text or answer slots to respond without reconstructing context.
- Keep lesson-specific CSS out by default. If a pattern repeats, create a small component with colocated styles.
- Do not add eyebrow/kicker markup to lesson headers.
- End with one exact Discord reply task.

## Lesson listing rules

- Show lesson number and date in lesson lists.
- Sort lesson lists newest to oldest.
- On the home index, show at most three lessons per topic and link to the topic page for the full list.
- On topic indexes, show all lessons.
