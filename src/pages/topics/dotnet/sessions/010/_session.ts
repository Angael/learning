import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:dotnet/010',
  topic: 'dotnet',
  number: '010',
  type: 'practice',
  title: 'Verify the created resource',
  summary: 'Extend a status-only endpoint test with a follow-up GET that checks the resource a client can read.',
  date: '2026-07-27',
  why: '.NET 009 correctly checked 201 and 400 responses, then identified that status-only assertions do not prove anything was created. This adds the distinct capability of following the returned Location and checking the created resource through the public API.',
  buildsOn: ['learn:dotnet/009'],
  focus: [
    'Use the Location response header as the address of the created resource.',
    'Read that resource through a follow-up GET.',
    'State the stronger guarantee and its remaining limit.',
  ],
  replyTasks: { 'learn:dotnet/010:q1': [] },
  replyTaskState: { 'learn:dotnet/010:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use reply evidence before moving from API-visible effects to logging and deployment checks.'],
  published: {
    route: '/topics/dotnet/sessions/010/',
    canonicalUrl: 'https://learn.widacki.me/topics/dotnet/sessions/010/',
  },
  archive: 'Candidate: endpoint-persistence-effect. Expected lines: `Assert.NotNull(createResponse.Headers.Location);`, then `var widget = await _client.GetFromJsonAsync<WidgetResponse>(createResponse.Headers.Location);`, then `Assert.Equal("Desk lamp", widget!.Name);`. Accept an equivalent local variable for Location or an explicit follow-up `GetAsync` plus JSON read. The test proves that, in the supplied test host, the accepted POST exposes a resource at its returned public location with the expected name. It does not prove survival across app or database restart, production configuration, or every stored field.',
};
