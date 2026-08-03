import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/011',
  topic: 'german',
  number: '011',
  type: 'practice',
  title: 'Krótka relacja: zuerst, dann, danach',
  summary: 'Połącz trzy gotowe zdarzenia w jasną relację za pomocą zuerst, dann i danach.',
  date: '2026-08-03',
  why: 'German 009 secured three common Perfekt forms after one focused repair. This adds the distinct capability of ordering a short past account with zuerst, dann, and danach while full verb forms remain visible, so it does not retest Perfekt retrieval or repeat the open social chat.',
  buildsOn: ['learn:german/009'],
  focus: [
    'Ułóż trzy zdarzenia w jasnej kolejności.',
    'Użyj zuerst, dann i danach na początku zdań.',
    'Zachowaj czasownik odmieniony na drugim miejscu.',
  ],
  replyTasks: { 'learn:german/011:q1': [] },
  replyTaskState: { 'learn:german/011:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Po odpowiedzi oceń kolejność i pozycję czasownika; drobne błędy pisowni popraw krótko bez osobnej sesji naprawczej.'],
  published: {
    route: '/topics/german/sessions/011/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/011/',
  },
  archive: 'Candidate: sequence-a-short-account. Expected reply: `Zuerst habe ich eine E-Mail beantwortet. Dann habe ich Mittagessen gekocht. Danach bin ich spazieren gegangen.` Accept correct ae/oe/ue/ss forms and harmless article variation. Each sentence should begin with its assigned connector, place the finite auxiliary second, and preserve the supplied completed Perfekt chunk. The target is event order and verb position, not independent participle retrieval.',
};
