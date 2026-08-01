import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/009',
  topic: 'german',
  number: '009',
  type: 'practice',
  title: 'Perfekt bez gotowych form: krótka relacja',
  summary: 'Zmień trzy proste informacje w krótką relację w Perfekt, samodzielnie dobierając haben lub sein i formę Partizip II.',
  date: '2026-07-28',
  why: 'German 005 used supplied Perfekt forms, while German 008 showed successful constrained production after repair. This spaced practice adds the distinct capability of retrieving common Perfekt forms without copying them, while the sentence frame and vocabulary remain visible.',
  buildsOn: ['learn:german/005', 'learn:german/008'],
  focus: [
    'Dobierz haben albo sein do trzech znanych czasowników.',
    'Utwórz i umieść Partizip II na końcu zdania.',
    'Połącz trzy fakty w krótką praktyczną relację.',
  ],
  replyTasks: {
    'learn:german/009:q1': [
      'Am Samstag habe ich bis 14:00 gearbeitet.\nDann bin ich in den Supermarkt gegangen.\nIn Abend habe ich einen Film geschaut.',
    ],
  },
  replyTaskState: { 'learn:german/009:q1': 'open' },
  evaluation: [
    'German 009 q1, pierwsza próba: Pierwsze dwa zdania są poprawne: `habe ... gearbeitet` oraz `bin ... gegangen`. W trzecim zdaniu potrzebujesz `Am Abend`, nie `In Abend`. Zadanie sprawdza też czasownik `sehen`, więc użyj `habe ... gesehen`, nie `habe ... geschaut`. Mała naprawa jest potrzebna, ponieważ chodzi o samodzielne przypomnienie tej pary Perfekt.',
  ],
  misconceptions: ['German 009 q1: `Am Abend` and `sehen → habe ... gesehen` need one short repair; `arbeiten → habe ... gearbeitet` and `gehen → bin ... gegangen` are secure in this attempt.'],
  next: ['Poproś o poprawienie tylko trzeciego zdania, potem zamknij zadanie, jeśli forma jest poprawna.'],
  published: {
    route: '/topics/german/sessions/009/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/009/',
  },
  archive: 'Candidate: independent-perfekt-retrieval. Expected core answers: `Am Samstag habe ich bis 14 Uhr gearbeitet.`, `Danach bin ich in den Supermarkt gegangen.`, `Am Abend habe ich einen Film gesehen.` Accept natural adverb order and ae/oe/ue/ss. Require the correct auxiliary and participle for each target verb. Do not penalize low-value punctuation. This is spaced retrieval after German 005 supplied the exact Perfekt forms; the current page supplies meaning and structure but not the assessed participles.',
};
