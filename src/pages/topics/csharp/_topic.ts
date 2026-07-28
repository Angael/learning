import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'csharp',
  title: 'C#',
  goal: 'Angeal can read, write, and debug modern C# confidently enough to build .NET APIs without treating the language as magic or ceremony.',
  baseline: [
    'Used C# lightly about eight years ago for Unity and small Windows apps; remembers little now.',
    'Strong JS/TS and backend API background; comfortable with terminal and Git.',
    'Wants .NET APIs and useful native Windows context, but not Blazor.',
    'Needs targeted correction around numeric operations, type inference, runtime model, value/reference types, nullability, and C# nominal types versus TypeScript habits.',
  ],
  policies: ['Teach C# for a TypeScript/backend developer, not from zero.', 'Prefer small API-relevant transfers over ceremony or isolated syntax drills.'],
  progression: ['Execution model and tools.', 'Types, nullability, and errors.', 'Methods and stateful classes.', 'Models and public surfaces.', 'Interfaces, generics, collections, and LINQ.', 'Async, testing, debugging, and ASP.NET Core transfer.'],
  milestones: [
    { title: 'Predict integer division and explain why 5 / 2 is not 2.5.', status: 'secure', evidence: 'C# 001.' },
    { title: 'Explain var as static type inference rather than JavaScript-style dynamic typing.', status: 'secure', evidence: 'C# 001.' },
    { title: 'Distinguish value types, reference types, and nullable reference types.', status: 'secure', evidence: 'C# 002.' },
    { title: 'Choose a small class or record only where it improves the model.', status: 'secure', evidence: 'C# 005–008.' },
    { title: 'Explain static with a precise ownership model.', status: 'secure', evidence: 'C# 003–004.' },
    { title: 'Translate TypeScript model habits into idiomatic C# interfaces and generics.', status: 'in-progress', evidence: 'C# 009 secured explicit nominal interface implementation. C# 010 secured one typed-list LINQ pipeline: filter with Where, transform with Select, and predict source-order output. C# 011 now checks deferred execution and ToList snapshot reasoning.' },
  ],
  candidates: [
    {
      id: 'nominal-interface-contract', status: 'done', type: 'lesson', title: 'Nominal interface contract',
      why: 'C# 007–008 assessed positional-record construction and diagnosis. This adds explicit interface implementation, a TypeScript structural-typing comparison, and a missing-member compiler failure.',
      buildsOn: ['learn:csharp/007', 'learn:csharp/008'],
      focus: ['Read one supplied interface and implementation.', 'Explain why matching shape alone does not implement a C# interface.', 'Diagnose one missing-member compiler failure.'],
      sessionId: 'learn:csharp/009', closedReason: 'Published as C# 009 with explicit nominal-contract teaching and a CS0535 repair task.',
    },
    {
      id: 'collections-after-interfaces', status: 'done', type: 'lesson', title: 'Collections and LINQ foundations',
      why: 'Collections now follow the first explicit interface contract, so typed collection and generic vocabulary can be grounded in C# 009 rather than arrive as isolated syntax.',
      buildsOn: ['learn:csharp/009'], focus: ['Use a typed collection and one simple query pipeline.'],
      sessionId: 'learn:csharp/010', closedReason: 'Published as C# 010 with List<T>, the IEnumerable<T> sequence idea, and a fresh Where-then-Select completion task.',
    },
    {
      id: 'linq-execution-timing', status: 'done', type: 'practice', title: 'LINQ execution timing',
      why: 'After the first collection pipeline, a small trace can distinguish building an IEnumerable<T> query from evaluating it without adding another broad syntax lesson.',
      buildsOn: ['learn:csharp/010'], focus: ['Predict when a short LINQ query reads its source.'],
      sessionId: 'learn:csharp/011', closedReason: 'Published as C# 011 with a two-read trace that contrasts deferred enumeration with a ToList snapshot.',
    },
  ],
};
