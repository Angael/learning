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
  replyTasks: {
    'learn:german/011:q1': [
      'Zuerst habe ich auf eine E-Mail geantwortet,\nDann habe ich Mittagessen gekocht,\nDanach bin ich spazieren gegangen.',
    ],
  },
  replyTaskState: { 'learn:german/011:q1': 'complete' },
  evaluation: [
    'German 011 q1: Zadanie jest wykonane poprawnie. Wszystkie trzy wydarzenia są w dobrej kolejności, każde zdanie zaczyna się od wymaganego łącznika, a odmieniony czasownik stoi na drugim miejscu: `habe`, `habe`, `bin`. Formy Perfekt są poprawne. Przecinki na końcu dwóch pierwszych zdań można zamienić na kropki, ale to drobna kwestia zapisu i nie wymaga osobnej naprawy.',
  ],
  misconceptions: [],
  next: ['Cel tej sesji jest pewny. Nie ma teraz otwartego zadania z niemieckiego.'],
  published: {
    route: '/topics/german/sessions/011/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/011/',
  },
  archive: 'Candidate: sequence-a-short-account. Expected reply: `Zuerst habe ich eine E-Mail beantwortet. Dann habe ich Mittagessen gekocht. Danach bin ich spazieren gegangen.` Accept correct ae/oe/ue/ss forms and harmless article variation. Each sentence should begin with its assigned connector, place the finite auxiliary second, and preserve the supplied completed Perfekt chunk. The target is event order and verb position, not independent participle retrieval.',
};
