import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:releaseboard/001',
  topic: 'releaseboard',
  number: '001',
  type: 'project',
  title: 'Establish the executable ReleaseBoard solution',
  summary: 'Create the .NET 10 solution yourself, run one API smoke endpoint, run NUnit tests, and commit the baseline.',
  date: '2026-08-04',
  why: 'ReleaseBoard needs a real, navigable codebase before it can teach domain rules or infrastructure. Creating this baseline yourself proves the CLI, solution structure, run loop, and Git workflow are available.',
  buildsOn: ['learn:csharp/001', 'learn:csharp/002', 'learn:csharp/009', 'learn:dotnet/001', 'learn:dotnet/003', 'learn:dotnet/009'],
  focus: [
    'Use the .NET CLI to create and connect a .slnx solution and projects.',
    'Explain solution versus project using the created artifact.',
    'Run an API, send one HTTP smoke request, run NUnit tests, and record evidence.',
  ],
  replyTasks: { 'learn:releaseboard/001:q1': [] },
  replyTaskState: { 'learn:releaseboard/001:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Do not start another ReleaseBoard session. Evaluate the setup evidence, then give hints or debugging help in this same session until it closes.'],
  published: {
    route: '/topics/releaseboard/sessions/001/',
    canonicalUrl: 'https://learn.widacki.me/topics/releaseboard/sessions/001/',
  },
  archive: 'Candidate: establish-executable-solution. Evidence required: .NET 10 SDK line, concise successful API smoke and test summaries, commit SHA, and the learner explanation that a solution coordinates projects while each project builds one deployable/testable unit. Review project layout, project reference direction, baseline nullability/analyzers/formatting, and whether the .http request reaches the health endpoint. Do not request screenshots; command output summaries are enough. Hints: first inspect SDK; then use dotnet new templates from projects/releaseboard; if the solution template defaults to .sln, use its format option for .slnx; let the API console reveal its actual local URL before sending the .http request.',
};
