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
    'ReleaseBoard 001 established the .NET 10 solution, API, NUnit tests, smoke request, shared quality baseline, README, and Git evidence. Its next endpoint candidate is ready, but no further ReleaseBoard event is yet published.',
  ],
  backlog: [
    'Open: [learn:german/011:q1]. ReleaseBoard 001 is closed; its next endpoint candidate is ready for a later published event.',
  ],
  outlook: [
    'ReleaseBoard: plan and publish the first release-request endpoint event from the now-verified baseline when appropriate.',
    'German: wait for the German 011 reply before adding more reply-required work; use it for event-order evidence.',
  ],
  archive: 'Week 2026-W32 records the curriculum correction: C# and .NET became deprecated historical references; C# 012/013 and .NET 010/011 were deleted with their open tasks; ReleaseBoard replaced their separate queues with one accumulating project and one-unfinished-session policy.',
};
