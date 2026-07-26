import type { ILearningNext } from './types.ts';

export const next: ILearningNext = {
  "date": "2026-07-26",
  "status": "planned",
  "blocks": [
    {
      "topic": "csharp",
      "type": "lesson",
      "why": "C# 007 and 008 assessed positional-record construction and diagnosis. This block adds a new capability: reading an explicit nominal interface contract, comparing it with TypeScript structural typing, and using a missing-member compiler failure as evidence.",
      "buildsOn": [
        "learn:csharp/007",
        "learn:csharp/008"
      ],
      "focus": [
        "Read one supplied interface and one implementation.",
        "Explain why matching shape alone does not implement a C# interface.",
        "Diagnose one missing-member compiler failure."
      ],
      "scope": [
        "Keep the interface, implementation, and compiler message supplied.",
        "Use one short TypeScript comparison.",
        "Defer generics, dependency injection, and broad interface design advice."
      ],
      "replyTaskCount": 1
    },
    {
      "topic": "dotnet",
      "type": "practice",
      "why": ".NET 007 assessed request binding and runtime validation, while .NET 008 assessed a concurrency invariant at the database boundary. This block instead transfers to observable endpoint behavior by completing or reading one narrow accepted-versus-rejected test with production code and setup supplied.",
      "buildsOn": [
        "learn:dotnet/007",
        "learn:dotnet/008"
      ],
      "focus": [
        "Identify the behavior one endpoint test proves.",
        "Complete or explain one accepted case and one rejected case.",
        "Separate public response behavior from implementation details."
      ],
      "scope": [
        "Supply the endpoint, test host, packages, and project setup.",
        "Assess only assertions and behavior reasoning.",
        "Defer database integration, mocking strategy, and full test-project construction."
      ],
      "replyTaskCount": 1
    }
  ],
  "archive": "# Next learning sessions\n\n- Date: 2026-07-26\n- Status: planned, not yet published\n- Weekly note: [2026-W30](/teacher-notes/weekly/2026-W30/)\n\n## Current direction\n\n- Publish no German block while `[learn:german/007:q1]` is still open. Its supported reading-to-response work already covers the practical block proposed for today, so another routine reading or constrained reply would fail the novelty gate.\n- The next C# block is a nominal-interface lesson. It differs from C# 007 and 008 by assessing explicit contract implementation and a missing-member failure, not positional-record construction or constructor diagnosis.\n- The next .NET block is a narrow endpoint behavior test. It differs from .NET 007 request binding and .NET 008 concurrency-boundary reasoning by assessing observable behavior through test assertions.\n- Both planned blocks have one reply task and may be published on their mapped days only after a fresh backlog check.\n"
};
