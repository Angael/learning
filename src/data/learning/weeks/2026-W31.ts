import type { ILearningWeek } from '../types.ts';

export const week2026W31: ILearningWeek = {
  id: '2026-W31',
  intent: [
    'Move C# from nominal contracts into typed collections, and move .NET tests from status checks into an API-visible created-resource check.',
    'Keep German contact bounded by the open railway exchange rather than add avoidable load.',
  ],
  coverage: [
    'C# 010 introduces List<T>, the sequence idea behind IEnumerable<T>, and one Where-then-Select pipeline after the explicit interface work in C# 009.',
    '.NET 010 follows the Location from a successful POST and checks the created representation through GET, directly answering the limit identified in the .NET 009 reply.',
    'The ready .NET data-access-boundary candidate was dropped because .NET 008 had already assessed database uniqueness authority and exception translation; publishing it would have repeated prior evidence.',
    'German 008 closed after a repair: the learner now correctly states an arrival deadline, accepts a transfer, and asks for the departure platform.',
  ],
  backlog: [
    'Open: [learn:csharp/010:q1] and [learn:dotnet/010:q1]. Each topic remains below the two-open-task limit.',
  ],
  outlook: [
    'C#: use C# 010 evidence to choose between a short LINQ execution-timing practice and more collection work.',
    '.NET: use .NET 010 evidence before moving to an observability or deployment-facing boundary.',
    'German: choose the next transfer from the completed German 008 evidence; do not add another task merely to meet a daily count.',
  ],
  archive: 'Week 2026-W31 starts with two evidence-led sessions. C# moves from explicit nominal contracts into a typed generic collection and a small query pipeline. .NET strengthens the endpoint test by checking an API-visible created resource, rather than repeating the persistence-conflict boundary already assessed in .NET 008. German 008 closed after a short repair of the railway exchange. No future publication dates are assigned.',
};
