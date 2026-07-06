# Learning System Handoff

Telegraph English. Purpose: compact handoff for low-context, adaptive, repo-backed teacher.

## Core

- Active topics: C#, .NET, German.
- Daily cron teaches without context rot.
- No random topic spam.
- No lesson backlog.
- Durable repo state.
- Internal notes: Telegraph English.
- Flexible, fun, not overwhelming.
- Token/cost conscious.

## Current cron

- ID: `e6bec18b47dd`
- Name: `Daily learning repository lesson`
- Schedule: `0 2 * * *` — 02:00 UTC, 04:00 Poland summer time.
- Deliver: `discord:1523220680106053662`
- Workdir: `/home/hermes/repos/learning`
- Skills: `learning-repository`
- Toolsets: `file`, `terminal`, `skills`, `delegation`

## Key rules

- Spawn exactly one research subagent before lesson crafting.
- Subagent gathers context only; no edits; Telegraph English.
- Subagent reads weekly log first after `AGENTS.md`.
- Main agent reads subagent summary + minimal files only.
- Choose 0-2 blocks/day.
- Workdays lighter; weekends heavier.
- Usually max 1 new concept/day.
- German active: B1 rusty; reactivation/fluency, not beginner A1.
- If prior response unanswered: check-in/retrieval; no new backlog.
- If files changed: build, commit, push main.

## Current state

- C#: `var`/numeric complete. value/reference/null complete. Next static/classes/records.
- .NET: minimal API complete. request pipeline complete. Next DI/config.
- German: added. Baseline B1 rusty after A1->B1 course 2-3 years ago.

## Internal state

- Weekly logs: `teacher-notes/weekly/`.
- Topic plans: `src/pages/topics/<topic>/plan.md`.
- Lesson notes: colocated `notes.md`.
- Feedback channel: Discord replies.
