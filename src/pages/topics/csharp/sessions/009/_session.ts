import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:csharp/009',
  topic: 'csharp',
  number: '009',
  type: 'lesson',
  title: 'Nominal interface contracts',
  summary: 'Read an explicit C# interface contract, compare it with TypeScript shape matching, and repair one missing-member compiler failure.',
  date: '2026-07-26',
  why: 'C# 007–008 secured positional-record construction and compiler-guided diagnosis. This adds the distinct capability of implementing an explicit nominal interface and recognizing why a matching shape alone is not enough in C#.',
  buildsOn: ['learn:csharp/007', 'learn:csharp/008'],
  focus: [
    'Read one interface and its explicit implementation.',
    'Contrast C# nominal interface implementation with TypeScript structural typing.',
    'Repair one CS0535 missing-member failure.',
  ],
  replyTasks: {
    'learn:csharp/009:q1': [
      'public interface IPriceLabel { string Format(decimal amount); } public sealed class UsdPriceLabel : IPriceLabel { public string Format(decimal amount){ return "$" + amount.ToString(); } } IPriceLabel is a contract, you have to sign it to be able to fit in such a role. In ts js is very dynamic so more is allowed. In c#, interfaces must be verbally implemented in order for class instance to be able to morph in to interface shape',
    ],
  },
  replyTaskState: { 'learn:csharp/009:q1': 'complete' },
  evaluation: [
    'C# 009 q1: Correctly supplied the public member and explained C# nominal interface implementation versus TypeScript structural shape matching. Small correction: `amount.ToString()` may produce `$12.5`; use `$"${amount:0.00}"` when two decimal places such as `$12.50` are required. Task closed; the nominal-contract target is secure enough to continue.',
  ],
  misconceptions: [],
  next: ['Use the interface as the type of a small collection before introducing LINQ.'],
  published: {
    route: '/topics/csharp/sessions/009/',
    canonicalUrl: 'https://learn.widacki.me/topics/csharp/sessions/009/',
  },
  archive: 'Candidate: nominal-interface-contract. Expected answer: add `public string Format(decimal amount) => $"${amount:0.00}";` inside `UsdPriceLabel`. The class must both name `IPriceLabel` after the colon and provide every required member. A different class with the same method shape does not implement the C# interface unless it explicitly names that contract. Accept equivalent expression-bodied or block-bodied implementations and clear wording about explicit nominal implementation.',
};
