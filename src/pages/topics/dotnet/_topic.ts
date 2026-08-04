import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'dotnet',
  title: '.NET (deprecated)',
  goal: 'Historical reference for completed .NET foundations that now continue through the ReleaseBoard Project.',
  baseline: [
    'This topic is retained so completed work remains readable.',
    'New .NET work belongs in ReleaseBoard, where runtime, HTTP, persistence, messaging, and operations form one system.',
  ],
  policies: [
    'Deprecated: do not publish or queue further .NET sessions here.',
    'Treat the retained sessions as historical reference, not proof of current mastery.',
    'Revisit endpoint, DI, validation, and test concepts through ReleaseBoard implementation.',
  ],
  progression: ['Historical foundations: ASP.NET Core pipeline and composition.', 'Historical foundations: validation, concurrency, and HTTP tests.', 'Continuation: ReleaseBoard Project.'],
  milestones: [
    { title: 'Build and read a minimal API endpoint.', status: 'secure', evidence: '.NET 001 and 005.' },
    { title: 'Understand the request pipeline.', status: 'secure', evidence: '.NET 002.' },
    { title: 'Use dependency injection and configuration in an endpoint.', status: 'secure', evidence: '.NET 003–006.' },
    { title: 'Reason about request validation and database uniqueness under concurrency.', status: 'secure', evidence: '.NET 007–008.' },
    { title: 'Write or complete a focused endpoint behavior test.', status: 'secure', evidence: '.NET 009; deepen this through ReleaseBoard integration work.' },
  ],
  candidates: [
    {
      id: 'endpoint-behavior-test', status: 'done', type: 'practice', title: 'Narrow endpoint behavior test',
      why: 'Historical .NET foundation.', buildsOn: ['learn:dotnet/007', 'learn:dotnet/008'],
      focus: ['Identify public endpoint behavior.', 'Separate public response behavior from implementation details.'],
      sessionId: 'learn:dotnet/009', closedReason: 'Published as .NET 009.',
    },
    {
      id: 'data-access-boundary', status: 'dropped', type: 'practice', title: 'Data-access boundary transfer',
      why: 'A separate task would duplicate existing evidence and the ongoing work has moved to ReleaseBoard.', buildsOn: ['learn:dotnet/009'],
      focus: ['Choose the boundary responsible for an expected persistence conflict.'],
      closedReason: 'Superseded by the ReleaseBoard Project migration.',
    },
  ],
};
