# Learning System Handoff

Compact operational summary. Repository `AGENTS.md` and attached Hermes skills are authoritative.

## Pipeline

### Planning

- Job: `Learning research and planning`
- ID: `2d3e7eb00b7a`
- Schedule: `0 2 * * *` on UTC host — currently 04:00 Warsaw summer time
- Skills: `teacher`, `learning-repository`, `learning-research-cron`
- Output: public weekly synthesis, `src/pages/teacher-notes/next.md`, short Discord morning plan
- Role: inspect exact evidence, compare current/previous coverage, maintain 3–6 week outlook, select workday two-block or flexible weekend load

### Production

- Job: `Learning lesson production`
- ID: `d23484be3ba0`
- Schedule: `0 4 * * *` on UTC host — currently 06:00 Warsaw summer time
- Skills: `teacher`, `learning-repository`, `learning-lesson-cron`
- Input: dated `src/pages/teacher-notes/next.md`
- Role: implement planned blocks, build, commit, push, and deliver exact copy/reply task

Legacy job `e6bec18b47dd` is paused for rollback until the split pipeline has successful runs.

## State ownership

- Exact task/response/misconception: lesson `notes.md`.
- Cross-topic synthesis, coverage, backlog, current week, 3–6 week outlook: `src/pages/teacher-notes/weekly/`.
- Durable goal, progression, achievement, major plan change: topic `plan.md`.
- Next dated blocks only: `src/pages/teacher-notes/next.md`.

Precedence: lesson evidence → latest weekly synthesis → topic plan. `next.md` is disposable scheduling state.

## Teaching contract

- Workday: two blocks; primary usually new, secondary reinforcement/practice/repair/German/catch-up.
- Weekend: two longer or up to three purposeful blocks.
- All active topics receive meaningful weekly contact.
- Backlog slows novelty and adds help; it does not automatically stop learning.
- Exercises default to 3/5 and require transfer, explanation, debugging, comparison, prediction, or production.
- Student questions inform teaching but do not rewrite major plans on a whim.
- Every response request has a stable `[learn:...]` ID and copy-ready template.

## Public links

- Teacher notes: `https://learn.widacki.me/teacher-notes/`
- Next handoff: `https://learn.widacki.me/teacher-notes/next/`
- Weekly notes: `https://learn.widacki.me/teacher-notes/weekly/<YYYY-Www>/`
- Topic plans: `https://learn.widacki.me/topics/<topic>/plan/`
