import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'csharp',
  title: 'C# (deprecated)',
  goal: 'Historical reference for the completed C# foundations that now continue through the ReleaseBoard Project.',
  baseline: [
    'This topic is retained so completed work remains readable.',
    'New C# work belongs in ReleaseBoard, where language decisions are made in a runnable .NET system.',
  ],
  policies: [
    'Deprecated: do not publish or queue further C# sessions here.',
    'Treat the retained sessions as historical reference, not proof of current mastery.',
    'Revisit C# concepts through ReleaseBoard implementation, tests, and debugging.',
  ],
  progression: ['Historical foundations: types and nullability.', 'Historical foundations: state, models, interfaces, collections, and LINQ.', 'Continuation: ReleaseBoard Project.'],
  milestones: [
    { title: 'Predict integer division and explain why 5 / 2 is not 2.5.', status: 'secure', evidence: 'C# 001.' },
    { title: 'Explain var as static type inference rather than JavaScript-style dynamic typing.', status: 'secure', evidence: 'C# 001.' },
    { title: 'Distinguish value types, reference types, and nullable reference types.', status: 'secure', evidence: 'C# 002.' },
    { title: 'Choose a small class or record only where it improves the model.', status: 'secure', evidence: 'C# 005–008.' },
    { title: 'Explain static with a precise ownership model.', status: 'secure', evidence: 'C# 003–004.' },
    { title: 'Translate TypeScript model habits into idiomatic C# interfaces, generics, and collections.', status: 'in-progress', evidence: 'C# 009–011; continue with ReleaseBoard implementation rather than a separate topic queue.' },
    { title: 'Read and write asynchronous result boundaries.', status: 'in-progress', evidence: 'Continue with Task<T> and await in ReleaseBoard service work.' },
  ],
  candidates: [
    {
      id: 'nominal-interface-contract', status: 'done', type: 'lesson', title: 'Nominal interface contract',
      why: 'Historical C# foundation.', buildsOn: ['learn:csharp/007', 'learn:csharp/008'],
      focus: ['Read an explicit interface implementation.', 'Contrast nominal C# contracts with TypeScript structural typing.'],
      sessionId: 'learn:csharp/009', closedReason: 'Published as C# 009.',
    },
    {
      id: 'collections-after-interfaces', status: 'done', type: 'lesson', title: 'Collections and LINQ foundations',
      why: 'Historical C# foundation.', buildsOn: ['learn:csharp/009'],
      focus: ['Use a typed collection and one simple query pipeline.'],
      sessionId: 'learn:csharp/010', closedReason: 'Published as C# 010.',
    },
    {
      id: 'linq-execution-timing', status: 'done', type: 'practice', title: 'LINQ execution timing',
      why: 'Historical C# foundation.', buildsOn: ['learn:csharp/010'],
      focus: ['Predict when a short LINQ query reads its source.'],
      sessionId: 'learn:csharp/011', closedReason: 'Published as C# 011.',
    },
  ],
};
