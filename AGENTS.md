# Repository instructions for agents

This repository is Angeal's durable learning workspace and minimal Astro site.
App is hosted under domain https://learn.widacki.me/

## Hard rules

- Work directly on `main`; do not open PRs.
- Commit and push directly to `main` when work is complete.
- Run `npm run build` before claiming repo-changing work is complete.
- Do not force-push unless Angeal explicitly approves.

## Mission

Keep the site minimal, readable, mobile-first, and easy to navigate in browser and filesystem. Repo is source of truth for teaching state: topic plans, lesson notes, progress, weekly logs, published artifacts.

Active topics: `C#`, `.NET`, `German`.

## Project shape

- `src/pages/index.astro` — public topic index.
- `src/pages/topics/<topic>/index.astro` — public topic page.
- `src/pages/topics/<topic>/plan.md` — compact topic plan: goal, baseline, progression, achievements.
- `src/pages/topics/<topic>/lessons/<001-slug>/index.astro` — public lesson page.
- `src/pages/topics/<topic>/lessons/<001-slug>/notes.md` — colocated lesson notes: summary, student response, misconceptions, next hints.
- `src/data/catalog.ts` — explicit topic and lesson list used by routing pages.
- `teacher-notes/weekly/` — internal compact teacher logs. Read before scheduling; update when state changes.
- `src/components/` — shared page, lesson, and content components.
- `src/styles/global.css` — true global tokens/base defaults plus Shiki/code styling.

Do not recreate old split layout: no root `topics/` notes tree; no `src/pages/lessons/<topic>/` lesson tree.

## Learning behavior

Teacher persona and workflow come from Hermes `learning-repository` skill.

Context rules:

- Read current weekly log first for scheduling/teaching.
- Then read only needed topic `plan.md`, lesson `notes.md`, and lesson `index.astro` only when needed.
- Avoid broad scans. Prefer exact paths.
- Internal notes, weekly logs, research summaries, and rationale use Telegraph English.
- Public lessons stay clear; do not over-compress if clarity suffers.
- Discord replies are main answer/feedback channel. Lesson tasks must say how to reply in Discord.
- Do not make website-only hidden answers unless user asks for submission/export features.

## Lesson rules

- Create lessons as nested Astro pages under topic: `src/pages/topics/<topic>/lessons/<001-slug>/index.astro`.
- Add colocated `notes.md` for each meaningful lesson.
- Add public lesson to `src/data/catalog.ts` so reachable from `/` and topic page.
- Build lesson pages with standard components unless Angeal asks for one-off page: `LessonPage`, `LessonSection`, `Code`, `Callout`, `LessonGrid`, `CommandList`, `TagList`.
- Use `Code.astro` for code samples: `<Code code={example} lang="csharp" />`. Do not import Shiki or render plain `<pre><code>` blocks in lesson pages.
- Keep lesson-specific CSS out of lesson pages by default. If pattern repeats, make small component with colocated styles.
- Do not add eyebrow/kicker markup to lesson headers.
- End with one exact Discord reply task.

## Lesson listing rules

- Show lesson number and date in lesson lists.
- Sort lesson lists newest to oldest.
- On home index page, show at most 3 lessons per topic and link to topic page for full list.
- On topic index pages, show all lessons without limiting them.
