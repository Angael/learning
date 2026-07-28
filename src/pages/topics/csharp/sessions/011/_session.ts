import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:csharp/011',
  topic: 'csharp',
  number: '011',
  type: 'practice',
  title: 'When a LINQ query runs',
  summary: 'Trace one deferred LINQ query and compare a saved result with a later read of the same query.',
  date: '2026-07-28',
  why: 'C# 010 secured one Where-then-Select pipeline and its source-order result. This adds the distinct capability of predicting when an IEnumerable<T> query reads a changing source, rather than treating query construction as immediate execution.',
  buildsOn: ['learn:csharp/010'],
  focus: [
    'Separate building a LINQ query from reading its results.',
    'Predict how source changes affect later enumeration.',
    'Distinguish a deferred query from a List<T> snapshot made by ToList.',
  ],
  replyTasks: { 'learn:csharp/011:q1': [] },
  replyTaskState: { 'learn:csharp/011:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use the trace to decide whether another LINQ practice or an async boundary is the better next C# step.'],
  published: {
    route: '/topics/csharp/sessions/011/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/011/',
  },
  archive: 'Candidate: linq-execution-timing. Expected: firstRead is [24, 30]; secondRead is [24, 30, 35]. The Where call builds a deferred query. Each ToList enumerates that query against the source as it exists at that moment, while firstRead is an independent List<int> snapshot. Accept equivalent plain wording. The target is timing and snapshot reasoning, not exact terminology.',
};
