import type { ILearningWeek } from '../types.ts';

export const week2026W31: ILearningWeek = {
  id: '2026-W31',
  intent: [
    'Record the then-current C#/.NET foundation work and continued German practice.',
    'This historical week was superseded by the ReleaseBoard migration on 2026-08-04.',
  ],
  coverage: [
    'C# 010 and C# 011 closed. C# 011 secured deferred-query timing and List<T> snapshots made at two different reads.',
    '.NET 009 secured focused endpoint behavior evidence.',
    'German 008 closed after repair. German 009 also closed: `arbeiten` and `gehen` were retrieved independently, and `sehen → gesehen` was repaired successfully after focused feedback.',
    'German 010 began the chat milestone with a supported refusal, reason, alternative, and confirmation.',
  ],
  backlog: [
    'Historical C#/.NET follow-up tasks were deleted during the ReleaseBoard migration. They do not remain active work or evidence.',
  ],
  outlook: [
    'All future C# and .NET curriculum work belongs to ReleaseBoard, which has one unfinished-session gate.',
    'German remains an independent active topic.',
  ],
  archive: 'Week 2026-W31 is retained as historical coverage. On 2026-08-04, its unanswered C#/.NET follow-ups were removed and their concepts moved into the ReleaseBoard Project, so this record intentionally does not retain dangling task identifiers.',
};
