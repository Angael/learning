import type { ILearningWeek } from '../types.ts';

export const week2026W32: ILearningWeek = {
  id: '2026-W32',
  intent: [
    'Retain German contact and historical coverage.',
    'Migrate disconnected C#/.NET curriculum into the single ReleaseBoard Project.',
  ],
  coverage: [
    'German 010 closed: the learner completed the supported refusal, reason, Sunday-at-15:00 alternative, and confirmation. The weil clause was correct; `keine Zeit` and `uns treffen` received inline low-value feedback.',
    'German 011 adds zuerst, dann, danach and verb-second order for a three-event account. Full Perfekt chunks remain visible, so the task does not repeat German 009 retrieval or German 010 social chat.',
    'C# and .NET are now deprecated historical topics. Their unanswered sessions were deleted rather than treated as completed.',
    'ReleaseBoard 001 established the .NET 10 solution, API, NUnit tests, smoke request, shared quality baseline, README, and Git evidence.',
    'ReleaseBoard 002 advances that baseline to one learner-written POST /release-requests contract. It requires an observable 201 response and Git evidence while keeping persistence, custom validation, and follow-up tests out of scope.',
  ],
  backlog: [
    'Open: [learn:german/011:q1] and [learn:releaseboard/002:q1]. ReleaseBoard allows no further session until 002 is evaluated and complete.',
  ],
  outlook: [
    'ReleaseBoard: wait for ReleaseBoard 002 evidence; evaluate or debug that same endpoint task before changing the queue.',
    'German: wait for the German 011 reply before adding more reply-required work; use it for event-order evidence.',
  ],
  archive: 'Week 2026-W32 records the curriculum correction: C# and .NET became deprecated historical references; C# 012/013 and .NET 010/011 were deleted with their open tasks; ReleaseBoard replaced their separate queues with one accumulating project and one-unfinished-session policy.',
};
