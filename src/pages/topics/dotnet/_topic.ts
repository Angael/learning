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
    { title: 'Write or complete a focused endpoint behavior test.', status: 'secure', evidence: '.NET 009 correctly asserted `201 Created` and `400 BadRequest`, then distinguished response-only evidence from proof of persistence.' },
  ],
  candidates: [
    {
      id: 'endpoint-behavior-test', status: 'done', type: 'practice', title: 'Narrow endpoint behavior test',
      why: '.NET 007 assessed request binding and runtime validation, while .NET 008 assessed a concurrency invariant. This transfers to observable accepted-versus-rejected behavior through supplied test setup.',
      buildsOn: ['learn:dotnet/007', 'learn:dotnet/008'],
      focus: ['Identify the behavior one endpoint test proves.', 'Complete or explain one accepted case and one rejected case.', 'Separate public response behavior from implementation details.'],
      sessionId: 'learn:dotnet/009', closedReason: 'Published as .NET 009 with supplied WebApplicationFactory setup and two focused status assertions.',
    },
    {
      id: 'data-access-boundary', status: 'dropped', type: 'practice', title: 'Data-access boundary transfer',
      why: 'A later transfer can connect validation, persistence, and error translation after observable endpoint behavior is secure.',
      buildsOn: ['learn:dotnet/009'], focus: ['Choose the boundary responsible for an expected persistence conflict.'],
      closedReason: '.NET 008 already assessed the database uniqueness authority and the expected-conflict translation boundary; another task would duplicate that evidence.',
    },
    {
      id: 'endpoint-persistence-effect', status: 'done', type: 'practice', title: 'Verify an API-visible created resource',
      why: '.NET 009 proved only response statuses, and the learner explicitly noted that this did not check whether anything was created. Follow the returned Location and verify the representation through GET.',
      buildsOn: ['learn:dotnet/009'], focus: ['Follow a 201 Location header.', 'Read the created resource through GET.', 'State the stronger guarantee and its limit.'],
      sessionId: 'learn:dotnet/010', closedReason: 'Published as .NET 010 with a follow-up GET and representation assertion based on the limit identified in the .NET 009 reply.',
    },
    {
      id: 'structured-logging-boundary', status: 'ready', type: 'lesson', title: 'Structured logging boundary',
      why: 'After validation, concurrency handling, and API-visible effect tests, the next production transfer is to record useful request outcomes without logging secrets or scattering provider details.',
      buildsOn: ['learn:dotnet/010'], focus: ['Choose one useful structured event and keep sensitive values out of it.'],
    },
  ],
};
