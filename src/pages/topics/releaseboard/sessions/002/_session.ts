import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:releaseboard/002',
  topic: 'releaseboard',
  number: '002',
  type: 'project',
  title: 'Create the first release-request endpoint',
  summary: 'Add a learner-written POST endpoint with a small HTTP contract, an observable 201 response, and no persistence yet.',
  date: '2026-08-06',
  why: 'ReleaseBoard 001 proved that the .NET 10 API can run and that the learner can navigate its solution. The next distinct capability is to replace generated sample behavior with one small ReleaseBoard HTTP slice while keeping validation and persistence out of scope.',
  buildsOn: ['learn:releaseboard/001'],
  focus: [
    'Model a small create request and response without adding persistence.',
    'Choose controller or Minimal API style deliberately and keep the route contract clear.',
    'Return an observable HTTP 201 result with a generated ID, draft status, UTC timestamp, and Location header.',
  ],
  replyTasks: { 'learn:releaseboard/002:q1': [] },
  replyTaskState: { 'learn:releaseboard/002:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Evaluate the endpoint, command evidence, and reasoning before unblocking validation and HTTP tests. Keep all repair or resizing work in ReleaseBoard 002 until this task is complete.'],
  published: { route: '/topics/releaseboard/sessions/002/', canonicalUrl: 'https://learn.widacki.me/topics/releaseboard/sessions/002/' },
  archive: 'Candidate: first-release-request-endpoint. Required evidence: concise API request/response summary, build and formatting summaries, changed paths, commit SHA, and one explanation of the chosen endpoint style. Do not ask for company code or a full file dump. Review the public HTTP contract, status and Location header, server-owned fields, and removal of WeatherForecast behavior. Validation, storage, tests beyond existing baseline tests, and architecture layers remain later work.',
};
