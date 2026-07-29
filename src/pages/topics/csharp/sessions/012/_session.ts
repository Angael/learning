import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:csharp/012',
  topic: 'csharp',
  number: '012',
  type: 'lesson',
  title: 'A first async boundary',
  summary: 'Read Task<T> as a later typed result, then use await to get the value before using it.',
  date: '2026-07-29',
  why: 'C# 010 secured a typed LINQ pipeline, and C# 011 already holds the focused execution-timing check. This adds the distinct API-relevant capability of reading Task<T> and awaiting an asynchronous result without repeating the open LINQ trace.',
  buildsOn: ['learn:csharp/010', 'learn:csharp/011'],
  focus: [
    'Read Task<T> as work that will produce a T.',
    'Use await to get the typed result before reading its members.',
    'Keep Task<T> separate from T in a short method.',
  ],
  replyTasks: { 'learn:csharp/012:q1': [] },
  replyTaskState: { 'learn:csharp/012:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use the reply to decide whether to practise async control flow or transfer the same boundary into an ASP.NET Core endpoint.'],
  published: {
    route: '/topics/csharp/sessions/012/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/012/',
  },
  archive: 'Candidate: first-async-boundary. Expected completion: `Task<Widget> pending = LoadWidgetAsync(42);`, `Widget widget = await pending;`, then `string label = widget.Name;`. The explanation should say that pending is a Task<Widget>, while await produces the Widget value. Accept an equivalent direct form such as `Widget widget = await LoadWidgetAsync(42);` if the learner still states the type distinction. The target is Task<T> versus T and one await boundary, not scheduling internals.',
};
