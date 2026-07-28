import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:dotnet/011',
  topic: 'dotnet',
  number: '011',
  type: 'lesson',
  title: 'One useful structured log event',
  summary: 'Write one searchable request-outcome log with named fields while keeping a secret and raw payload out of logs.',
  date: '2026-07-28',
  why: '.NET 010 extends endpoint tests to an API-visible created resource. This adds the distinct production capability of recording that request outcome as named data without leaking secrets or coupling endpoint code to a logging provider.',
  buildsOn: ['learn:dotnet/010'],
  focus: [
    'Use an ILogger message template with named fields.',
    'Record a useful request outcome rather than a raw request body.',
    'Keep credentials and other sensitive values out of logs.',
  ],
  replyTasks: { 'learn:dotnet/011:q1': [] },
  replyTaskState: { 'learn:dotnet/011:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use reply evidence from .NET 010 and 011 before choosing another testing, observability, or deployment boundary.'],
  published: {
    route: '/topics/dotnet/sessions/011/',
    canonicalUrl: 'https://learn.widacki.me/topics/dotnet/sessions/011/',
  },
  archive: 'Candidate: structured-logging-boundary. Expected core line: `_logger.LogInformation("Widget {WidgetId} created with status {StatusCode}", widget.Id, StatusCodes.Status201Created);`. Accept a natural equivalent with stable named properties and no interpolation. The answer must exclude request.ApiKey; excluding the whole raw request is also important. The target is a useful structured outcome with no secret, not a specific provider or sink.',
};
