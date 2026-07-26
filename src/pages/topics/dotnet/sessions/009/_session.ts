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
  replyTasks: {
    'learn:dotnet/009:q1': [
      'Assert.Equal(HttpStatusCode.Created, response.StatusCode);',
      'Assert.Equal(HttpStatusCode.BadRequest, response.StatusCode);',
      'Those tests basically only prove that, given some input, some HTTP status is returned. It does not check whether anything was actually created.',
    ],
  },
  replyTaskState: { 'learn:dotnet/009:q1': 'complete' },
  evaluation: [
    'Correct: the accepted case asserts `201 Created` and the rejected case asserts `400 BadRequest` against the observed `response.StatusCode`.',
    'Strong limit identified: status-only tests verify the public response for the supplied inputs, not that a resource was persisted or persisted correctly.',
  ],
  misconceptions: [],
  next: ['Next, verify a real effect through a response representation, a follow-up GET, or direct test-database inspection when that effect is part of the endpoint contract.'],
  published: {
    route: '/topics/dotnet/sessions/009/',
    canonicalUrl: 'https://learn.widacki.me/topics/dotnet/sessions/009/',
  },
  archive: 'Candidate: endpoint-behavior-test. Expected replacements: accepted assertion uses `HttpStatusCode.Created` and `response.StatusCode`; rejected assertion uses `HttpStatusCode.BadRequest` and `response.StatusCode`. The tests prove the POST endpoint returns the stated public status for these two inputs when hosted by the supplied test app. They do not prove all validation, persistence, concurrency, or production deployment behavior. Accept equivalent Assert syntax that compares the same values.',
};
