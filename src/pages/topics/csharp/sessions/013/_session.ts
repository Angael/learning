import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:csharp/013',
  topic: 'csharp',
  number: '013',
  type: 'practice',
  title: 'Safe dictionary lookup',
  summary: 'Use TryGetValue to read a typed dictionary without assuming that a key exists.',
  date: '2026-08-03',
  why: 'C# 002 secured nullable-reference reasoning, and C# 010 secured one typed generic collection. This adds the distinct capability of reading a Dictionary<TKey, TValue> through its bool-returning TryGetValue boundary instead of risking a missing-key exception.',
  buildsOn: ['learn:csharp/002', 'learn:csharp/010'],
  focus: [
    'Read Dictionary<TKey, TValue> as a typed key-to-value collection.',
    'Use the bool from TryGetValue before reading its out value.',
    'Explain what a false lookup result means.',
  ],
  replyTasks: { 'learn:csharp/013:q1': [] },
  replyTaskState: { 'learn:csharp/013:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use the reply to check whether the bool and out value are understood as one result boundary; do not turn a small syntax slip into a separate repair.'],
  published: {
    route: '/topics/csharp/sessions/013/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/013/',
  },
  archive: 'Candidate: safe-dictionary-lookup. Expected completion: `products.TryGetValue(id, out Product? product)` and `return product.Sku;`. The explanation should say that false means the key was not found, so the value must not be used. Accept `out var product`. The target is the TryGetValue boundary, not dictionary construction or nullable syntax.',
};
