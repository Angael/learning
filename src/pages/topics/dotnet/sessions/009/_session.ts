import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:dotnet/009',
  topic: 'dotnet',
  number: '009',
  type: 'practice',
  title: 'Endpoint behavior test',
  summary: 'Complete two narrow HTTP assertions for accepted and rejected requests, then state the public behavior the tests prove.',
  date: '2026-07-26',
  why: '.NET 007 secured request binding and runtime rejection, while .NET 008 secured a persistence conflict under concurrency. This now tests the distinct capability of checking an endpoint through its observable HTTP response instead of its internal branches.',
  buildsOn: ['learn:dotnet/007', 'learn:dotnet/008'],
  focus: [
    'Complete one accepted-case and one rejected-case HTTP assertion.',
    'Test the public response rather than an internal implementation detail.',
    'State the narrow guarantee and one important limit of the tests.',
  ],
  replyTasks: { 'learn:dotnet/009:q1': [] },
  replyTaskState: { 'learn:dotnet/009:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use a focused test to protect error translation at a data-access boundary.'],
  published: {
    route: '/topics/dotnet/sessions/009/',
    canonicalUrl: 'https://learn.widacki.me/topics/dotnet/sessions/009/',
  },
  archive: 'Candidate: endpoint-behavior-test. Expected replacements: accepted assertion uses `HttpStatusCode.Created` and `response.StatusCode`; rejected assertion uses `HttpStatusCode.BadRequest` and `response.StatusCode`. The tests prove the POST endpoint returns the stated public status for these two inputs when hosted by the supplied test app. They do not prove all validation, persistence, concurrency, or production deployment behavior. Accept equivalent Assert syntax that compares the same values.',
};
