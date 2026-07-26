import type { ILearningWeek } from '../types.ts';

export const week2026W30: ILearningWeek = {
  id: '2026-W30',
  intent: [
    'Keep work capability-led across C#, .NET, and German, with small supported tasks and no cosmetic repeats.',
  ],
  coverage: [
    'C# 009 adds explicit nominal interface implementation, a TypeScript structural-typing contrast, and one missing-member compiler repair after the record work in C# 007–008.',
    '.NET 009 adds observable endpoint testing through accepted and rejected HTTP status assertions after request validation in .NET 007 and concurrency reasoning in .NET 008.',
    'German 008 adds a supported three-turn railway-ticket exchange after the café order in German 006. It does not repeat the parcel reading-and-response task in German 007.',
  ],
  backlog: [
    'Open: [learn:csharp/009:q1], [learn:dotnet/009:q1], [learn:german/007:q1], and [learn:german/008:q1]. Each topic remains at or below the two-open-task limit.',
  ],
  outlook: [
    'C#: use reply evidence from C# 009 before judging the interface milestone; typed collections and one small query are the next ready curriculum step.',
    '.NET: use reply evidence from .NET 009 before judging endpoint-test skill; the data-access boundary transfer is now ready.',
    'German: wait for evidence from the two open practical tasks before adding another reply-required task; use the replies to choose grammar support or a fluency step.',
  ],
  archive: 'Week 2026-W30 moved all three active topics through distinct capabilities. Earlier C# record construction led to an explicit nominal interface lesson. Earlier .NET validation and concurrency work led to a narrow HTTP behavior-test practice. German kept frequent contact through a supported ticket-counter exchange while the parcel response remained open. No future session dates are assigned here; the typed candidate queues hold current teacher intent.',
};
