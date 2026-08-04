import type { ILearningWeek } from '../types.ts';

export const week2026W32: ILearningWeek = {
  id: '2026-W32',
  intent: [
    'Retain German contact and historical coverage.',
    'Migrate disconnected C#/.NET curriculum into the single ReleaseBoard Project.',
  ],
  coverage: [
    'German 011 adds zuerst, dann, danach and verb-second order for a three-event account. Full Perfekt chunks remain visible, so the task does not repeat German 009 retrieval or German 010 social chat.',
    'C# and .NET are now deprecated historical topics. Their unanswered sessions were deleted rather than treated as completed.',
    'ReleaseBoard 001 is the only active .NET-learning task: the learner establishes a .NET 10 solution, API, NUnit tests, smoke request, baseline quality settings, README, and Git evidence.',
  ],
  backlog: [
    'Open: [learn:releaseboard/001:q1], [learn:german/010:q1], and [learn:german/011:q1]. ReleaseBoard may not receive another session until its single open task closes.',
  ],
  outlook: [
    'ReleaseBoard: inspect evidence, give staged hints, or resize the existing task if needed; publish no new ReleaseBoard content while it is open.',
    'German: wait for one reply before adding more reply-required work; use German 010 for chat coherence and German 011 for event order evidence.',
  ],
  archive: 'Week 2026-W32 records the curriculum correction: C# and .NET became deprecated historical references; C# 012/013 and .NET 010/011 were deleted with their open tasks; ReleaseBoard replaced their separate queues with one accumulating project and one-unfinished-session policy.',
};
