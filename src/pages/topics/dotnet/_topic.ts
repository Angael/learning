import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'dotnet',
  title: '.NET',
  goal: 'Angeal can build and reason about practical .NET backend services, from C# fundamentals to deployment-aware APIs.',
  baseline: ['Strong backend API background.', 'Comfortable with terminal and Git workflows; prefers terminal-first development.', 'Wants practical .NET APIs and deployment-aware services.', 'Does not need introductory type drills or Blazor.'],
  policies: ['Prioritize .NET-specific production decisions, failure modes, and trade-offs.', 'Supply setup when the learning target is endpoint behavior or reasoning rather than project construction.'],
  progression: ['C# runtime and dotnet CLI.', 'ASP.NET Core pipeline.', 'Dependency injection and configuration.', 'Data access and validation.', 'Concurrency, testing, logging, containers, and deployment.'],
  milestones: [
    { title: 'Build and read a minimal API endpoint.', status: 'secure', evidence: '.NET 001 and 005.' },
    { title: 'Understand the request pipeline.', status: 'secure', evidence: '.NET 002.' },
    { title: 'Use dependency injection and configuration in an endpoint.', status: 'secure', evidence: '.NET 003–006.' },
    { title: 'Reason about request validation and database uniqueness under concurrency.', status: 'secure', evidence: '.NET 007–008.' },
    { title: 'Write or complete a focused endpoint behavior test.', status: 'in-progress', evidence: 'Candidate queued after the validation and concurrency work.' },
  ],
  candidates: [
    {
      id: 'endpoint-behavior-test', status: 'ready', type: 'practice', title: 'Narrow endpoint behavior test',
      why: '.NET 007 assessed request binding and runtime validation, while .NET 008 assessed a concurrency invariant. This transfers to observable accepted-versus-rejected behavior through supplied test setup.',
      buildsOn: ['learn:dotnet/007', 'learn:dotnet/008'],
      focus: ['Identify the behavior one endpoint test proves.', 'Complete or explain one accepted case and one rejected case.', 'Separate public response behavior from implementation details.'],
    },
    {
      id: 'data-access-boundary', status: 'blocked', type: 'practice', title: 'Data-access boundary transfer',
      why: 'A later transfer can connect validation, persistence, and error translation after observable endpoint behavior is secure.',
      buildsOn: [], focus: ['Choose the boundary responsible for an expected persistence conflict.'], blockedBy: ['Complete or deliberately drop endpoint-behavior-test first.'],
    },
  ],
};
