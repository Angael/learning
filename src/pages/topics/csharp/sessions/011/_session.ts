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
  replyTasks: {
    'learn:csharp/011:q1': [
      '1. 24 and 30, though the exercise would prove the point better if added value was below the where filter. This would showcase the deferred behavior better.\n\n2. 20, 30, 35\n\n3. Where() method creates kind of a recipe, and ToList() bakes the array from it.',
    ],
  },
  replyTaskState: { 'learn:csharp/011:q1': 'complete' },
  evaluation: [
    'C# 011 q1: Your execution model is correct, with one trace correction: `firstRead` is [24, 30], and `secondRead` is [24, 30, 35], not [20, 30, 35]. `20` never occurs in the source; it is the filter threshold. Your recipe-and-baking model is accurate: `Where` builds the deferred query, while each `ToList` reads it and makes a separate list at that time. Good design note too: adding a value below 20 between the reads would make the filter’s effect clearer while still demonstrating deferred execution. This is a small output slip, not a target-level misunderstanding. Task closed; the LINQ timing and snapshot target is secure enough to continue.',
  ],
  misconceptions: [],
  next: ['Continue with the already published async boundary in C# 012.'],
  published: {
    route: '/topics/csharp/sessions/011/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/011/',
  },
  archive: 'Candidate: linq-execution-timing. Expected: firstRead is [24, 30]; secondRead is [24, 30, 35]. The Where call builds a deferred query. Each ToList enumerates that query against the source as it exists at that moment, while firstRead is an independent List<int> snapshot. Accept equivalent plain wording. The target is timing and snapshot reasoning, not exact terminology.',
};
