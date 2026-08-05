import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'releaseboard',
  title: 'ReleaseBoard Project',
  goal: 'Angeal can independently build and ship a company-style .NET vertical slice: HTTP API, domain logic, SQL Server persistence, service integration, RabbitMQ messaging, tests, observability, containers, and operational documentation.',
  baseline: [
    'Experienced TypeScript/JavaScript frontend and backend developer; comfortable with Node/Bun, Hono, databases, TypeScript ORMs, terminal workflows, and Git.',
    'Has prior exposure to C# and ASP.NET Core foundations, but not demonstrated independent .NET project navigation, implementation, debugging, or delivery.',
    'ReleaseBoard is a neutral release-request workflow system. It is independently written and must not reproduce company code, rules, endpoints, secrets, schemas, or private packages.',
  ],
  policies: [
    'Exactly one unfinished ReleaseBoard session is allowed. Publish a new session only after the learner supplies completion evidence for the current one; use the same session for hints, debugging, evaluation, or resizing.',
    'The learner writes, runs, commits, and pushes project code. Give acceptance criteria, paths, commands, staged hints, and review; do not provide complete implementations.',
    'Teach the underlying problem, the public/current ReleaseBoard mechanism, and the company convention separately. Company names are context only, never source material to copy.',
    'Use .NET 10, nullable reference types, modern hosting, SQL Server, Dapper, FluentMigrator, NUnit, Moq, real HTTP integration tests, RabbitMQ concepts then MassTransit, OpenTelemetry, and containers as the main path.',
    'Start as one API. Extract storage ownership and a worker only after working vertical slices make the boundary useful. No frontend.',
  ],
  progression: [
    'Establish an executable .NET 10 solution and one ASP.NET Core API.',
    'Build release-request HTTP, domain, DI, async, validation, and test slices.',
    'Add SQL Server, FluentMigrator, Dapper, transactions, Location, and ETag concurrency.',
    'Extract storage ownership and add typed HTTP service calls with failure handling.',
    'Add RabbitMQ/MassTransit, a deployment-status worker, retries, and idempotency.',
    'Add logs, telemetry, health checks, containers, architecture/NFR docs, CI, and a smaller independent capstone.',
  ],
  milestones: [
    { title: 'Create and navigate a runnable .NET 10 solution with an API and NUnit tests.', status: 'secure', evidence: 'ReleaseBoard 001 complete: branch `feature/releaseboard-bootstrap` at `712c44d` provides solution/API/tests, health smoke evidence, shared nullable/analyzer baseline, formatting, README, and Git evidence.' },
    { title: 'Build and test release-request HTTP and domain slices.', status: 'not-started', evidence: 'Planned after executable-project evidence.' },
    { title: 'Persist drafts with SQL Server, FluentMigrator, Dapper, transactions, and optimistic concurrency.', status: 'not-started', evidence: 'Planned after the first working API slices.' },
    { title: 'Operate service and messaging boundaries with safe failure handling.', status: 'not-started', evidence: 'Planned after local persistence is established.' },
    { title: 'Ship a locally observable, containerized backend with concise operational documentation.', status: 'not-started', evidence: 'Planned after APIs, storage, and worker exist.' },
  ],
  candidates: [
    {
      id: 'establish-executable-solution', status: 'done', type: 'project', title: 'Establish the executable ReleaseBoard solution',
      why: 'A durable project replaces disconnected snippets. Before domain or infrastructure work, the learner must create, navigate, run, test, and commit the actual solution.',
      buildsOn: ['learn:csharp/001', 'learn:csharp/002', 'learn:csharp/009', 'learn:dotnet/001', 'learn:dotnet/003', 'learn:dotnet/009'],
      focus: ['Use the .NET CLI and a .slnx solution.', 'Separate solution and project.', 'Run an API, make an HTTP smoke call, run tests, and record setup evidence.'],
      sessionId: 'learn:releaseboard/001', closedReason: 'Completed: the learner created and pushed the executable solution baseline. Branch `feature/releaseboard-bootstrap` reached `712c44d` with API/tests, health smoke evidence, root HTTP request, README, .editorconfig, and shared nullable/analyzer props.',
    },
    {
      id: 'first-release-request-endpoint', status: 'ready', type: 'project', title: 'Create the first release-request endpoint',
      why: 'The first domain slice needs a verified executable solution, not a prebuilt scaffold.',
      buildsOn: ['learn:releaseboard/001'],
      focus: ['Model a small create request and response.', 'Choose an endpoint style deliberately.', 'Return an observable HTTP result.'],
    },
    {
      id: 'release-request-validation-and-tests', status: 'blocked', type: 'project', title: 'Validate and test a release-request slice',
      why: 'Validation and tests should exercise a real endpoint rather than a detached example.',
      buildsOn: ['learn:releaseboard/001'],
      focus: ['Use nullability and validation deliberately.', 'Add NUnit unit and HTTP integration evidence.'],
      blockedBy: ['A working first release-request endpoint.'],
    },
  ],
};
