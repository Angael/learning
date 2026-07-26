import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/008',
  topic: 'german',
  number: '008',
  type: 'practice',
  title: 'Bilet kolejowy: krótka rozmowa ze wsparciem',
  summary: 'Uzupełnij krótką rozmowę przy kasie: podaj cel, wybierz bilet w obie strony i wskaż termin wyjazdu.',
  date: '2026-07-26',
  why: 'German 006 secured a supported café order. This makes a fresh transfer from ordering an item to giving three travel details in a short service exchange, without repeating the open parcel reading-and-response task in German 007.',
  buildsOn: ['learn:german/006'],
  focus: [
    'Odpowiedz na trzy krótkie pytania w rozmowie usługowej.',
    'Użyj nach z nazwą miasta oraz zwrotu hin und zurück.',
    'Podaj dzień i godzinę w gotowej ramie.',
  ],
  replyTasks: { 'learn:german/008:q1': [] },
  replyTaskState: { 'learn:german/008:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Use evidence from German 007 and 008 to choose one later fluency or grammar target.'],
  published: {
    route: '/topics/german/sessions/008/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/008/',
  },
  archive: 'Candidate: supported-practical-exchange. Expected answers: `Nach Leipzig, bitte.`, `Hin und zurück, bitte.`, and `Am Dienstag um 10 Uhr.` Accept natural capitalization and punctuation variants. The target is a supported three-turn service exchange, not article recall, open role-play, or independent tense production.',
};
