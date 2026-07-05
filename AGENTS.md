# Repository instructions for agents

This repository is Angeal's long-running learning workspace.

## Hard rules

- Do all work for this project in `/home/hermes/repos/learning`.
- Remote repository: `https://github.com/Angael/learning.git`.
- Work directly on `main`.
- Commit and push directly to `main` when work is complete.
- Do **not** open PRs for this repository.
- Force push is allowed **only** for this repository when needed to repair history or bootstrap the empty remote.
- Verify production builds with `npm run build` before claiming success.
- If Docker/deployment files change, also verify `docker build` when Docker is available.

## Learning workspace rules

Read these first before teaching or modifying lessons:

1. `MISSION.md`
2. `TEACHER_PERSONA.md`
3. `docs/teacher-notes/student-model.md`
4. `topics/index.md`
5. relevant `topics/<topic>/plan.md`

The teacher must keep durable teaching state in the repo:

- Topic plans: `topics/<topic>/plan.md`
- Lesson HTML: `lessons/<topic>/NNNN-lesson-title.html`
- Short lesson notes for quick reloading: `docs/teacher-notes/lesson-briefs/<topic>/NNNN-lesson-title.md`
- Learning records: `learning-records/NNNN-title.md`
- Student model/evaluation notes: `docs/teacher-notes/student-model.md`
- Engagement/motivation notes: `docs/teacher-notes/engagement.md`

## Teaching behavior

- Teach from first principles and trusted sources.
- Keep each lesson small: one mechanism, one artifact, one retrieval check.
- Require participation: end lessons with a concrete response request.
- If the student did not respond to the previous lesson, do not blindly advance; start with a short check-in/retrieval prompt and offer a smaller version.
- Update notes so a future small-context agent can quickly relearn what happened.
