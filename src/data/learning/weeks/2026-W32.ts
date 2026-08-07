import type { ILearningWeek } from '../types.ts';

export const week2026W32: ILearningWeek = {
  id: '2026-W32',
  intent: [
    'Retain German contact and historical coverage.',
    'Migrate disconnected C#/.NET curriculum into the single ReleaseBoard Project.',
  ],
  coverage: [
    'German 010 closed: the learner completed the supported refusal, reason, Sunday-at-15:00 alternative, and confirmation. The weil clause was correct; `keine Zeit` and `uns treffen` received inline low-value feedback.',
    'German 011 closed: the learner ordered all three past events with zuerst, dann, danach and correct verb-second auxiliaries. The two end commas received inline low-value feedback only.',
    'C# and .NET are now deprecated historical topics. Their unanswered sessions were deleted rather than treated as completed.',
    'ReleaseBoard 001 established the .NET 10 solution, API, NUnit tests, smoke request, shared quality baseline, README, and Git evidence.',
    'ReleaseBoard 002 advances that baseline to one learner-written POST /release-requests contract. It requires an observable 201 response and Git evidence while keeping persistence, custom validation, and follow-up tests out of scope.',
    'German 012 adds a fresh controlled comparison: state a preference with lieber ... als and support it with a verb-final weil reason, using visible vocabulary.',
  ],
  backlog: [
    'Open: [learn:releaseboard/002:q1]. ReleaseBoard allows no further session until 002 is evaluated and complete.',
    'Open: [learn:german/012:q1]. The task asks for two short supported preference sentences.',
  ],
  outlook: [
    'ReleaseBoard: wait for ReleaseBoard 002 evidence; evaluate or debug that same endpoint task before changing the queue.',
    'German: wait for German 012 evidence on lieber ... als and verb-final weil before choosing the next target.',
  ],
  archive: 'Week 2026-W32 records the curriculum correction: C# and .NET became deprecated historical references; C# 012/013 and .NET 010/011 were deleted with their open tasks; ReleaseBoard replaced their separate queues with one accumulating project and one-unfinished-session policy.',
};
