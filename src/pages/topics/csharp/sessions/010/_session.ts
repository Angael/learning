import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:csharp/010',
  topic: 'csharp',
  number: '010',
  type: 'lesson',
  title: 'Typed collections and a LINQ pipeline',
  summary: 'Read a generic list, filter it with Where, transform it with Select, and predict the final result.',
  date: '2026-07-27',
  why: 'C# 009 secured explicit nominal interface implementation and showed that the next step can use a contract as a type. This adds the distinct capability of reading a typed generic collection and building one small filter-and-transform LINQ pipeline.',
  buildsOn: ['learn:csharp/009'],
  focus: [
    'Read List<T> and IEnumerable<T> as typed generic collection forms.',
    'Separate filtering with Where from transformation with Select.',
    'Complete and trace one short query pipeline.',
  ],
  replyTasks: { 'learn:csharp/010:q1': [] },
  replyTaskState: { 'learn:csharp/010:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use reply evidence to decide whether to practise LINQ execution timing or add a second collection operation.'],
  published: {
    route: '/topics/csharp/sessions/010/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/010/',
  },
  archive: 'Candidate: collections-after-interfaces. Expected completion: `Where(order => order.IsPaid && order.Total >= 100m)` and `Select(order => order.Id)`. The final IDs, in source order, are A-10 and C-30. Accept equivalent clear predicates such as `order.IsPaid == true`; require the selector to return the ID rather than the whole order. The key distinction is that Where keeps matching items and Select changes each kept item into another value.',
};
