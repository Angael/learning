# Learning repository

Angeal's durable learning workspace and minimal Astro site: https://learn.widacki.me/.

## Hard rules

- Work directly on `main`; no PRs or force-push unless explicitly requested.
- Do not start `pnpm dev` or a preview server. Verify repository work with `pnpm check` and `pnpm build`, then commit and push completed changes.

## Project shape

- `src/pages/index.astro` — topic index
- `src/pages/topics/<topic>/index.astro` — topic page
- `src/pages/topics/<topic>/plan.md` — durable topic direction and topic-specific teaching policy
- `src/pages/topics/<topic>/sessions/<NNN>/index.astro` — learner-facing learning event
- `src/pages/topics/<topic>/sessions/<NNN>/_session.ts` — colocated typed source of truth for the matching event, including replies and evaluation
- `src/data/learning/next.ts` — typed dated planning state
- `src/data/learning/weeks/YYYY-Www.ts` — typed weekly synthesis
- `src/data/catalog.ts` — public topics and sessions
- `src/components/` — shared page, session, and content components

## Content rules

- A session is one published learning event, not a content type. It may be explanation-only, assessment-only, or mixed.
- Every assigned action must appear on a session `index.astro` page before delivery. Related actions and repairs may share or update one page.
- Sessions and response tasks use permanent `[learn:...]` IDs.
- Public links target session pages, never `/notes/` or GitHub source.
- Every public session has a numeric route and matching colocated typed `_session.ts`; catalog entries are derived from those records.
- Session types are only `lesson`, `practice`, `exam`, or `project`. Learner-facing content follows the topic plan's language policy.
- Use `SessionPage`, `SessionSection`, `SessionGrid`, `SessionList`, `Code`, `Callout`, `CommandList`, `TagList`, and `ReplyTask` rather than one-off markup.
- Use `Code.astro` for code samples; do not import Shiki or render plain `<pre><code>` for code sessions.
- Every response request uses `ReplyTask` with a permanent ID. Never renumber published IDs. Store learner text in `replyTasks` and teacher judgment in the dedicated typed fields.
- The `ReplyTask` copy button must copy only the permanent ID and the learner's typed answer. Do not add a copy-content prop or duplicate task text in copied replies.
- Keep session-specific CSS out by default and do not add eyebrow/kicker headers.
- Sort session lists newest-first; show number and date, all sessions on topic pages, and at most three per topic on home.
