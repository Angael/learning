import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/008',
  topic: 'german',
  number: '008',
  type: 'practice',
  title: 'Połączenie z przesiadką: rozmowa pod presją czasu',
  summary: 'Przeprowadź krótką rozmowę o połączeniu kolejowym: powiedz, kiedy chcesz dojechać, zaakceptuj przesiadkę i zapytaj o odjazd oraz peron.',
  date: '2026-07-26',
  why: 'German 006 secured a supported café order. This raises the transfer from naming a purchase to managing a connection constraint, a change, and a follow-up question in a short service exchange, without repeating the open parcel reading-and-response task in German 007.',
  buildsOn: ['learn:german/006'],
  focus: [
    'Ustal trasę z jedną przesiadką w krótkiej rozmowie usługowej.',
    'Użyj czasownika rozdzielnie złożonego: abfahren / umsteigen.',
    'Zapytaj o godzinę odjazdu i peron w uprzejmej formie.',
  ],
  replyTasks: {
    'learn:german/008:q1': [
      '1. Ich moechte im Lips von 13 Uhr werden.\n2. Ist die Verbindung direkt?\n3. Ich kann Im Berlin umsteigen.\n4. Von welchen Gleis fahrt der Zug von Hamburg ab?',
      'Ich moechte im Lips von 13 Uhr ankommen.\nIst die Verbindung direkt?\nIch kann In Berlin umsteigen.\nVon welchen Gleis faehrt der Zug von Hamburg ab?',
      'Ich moechte in Leipzig vor 13 Uhr ankommen.\nJa, das ist in Ordnung. Ich steige in Berlin um.\nVon welchem Gleis faehrt der Zug von Hamburg ab?',
    ],
  },
  replyTaskState: { 'learn:german/008:q1': 'complete' },
  evaluation: [
    'German 008 q1: Zdanie 2 jest poprawne. W zdaniu 1 potrzebujesz `ankommen`, nie `werden`: celem jest dotarcie do Lipska. W zdaniu 3 jest `in Berlin`, bez `im`, a odpowiedź powinna też zaakceptować przesiadkę. W zdaniu 4 po `von` jest Dativ: `welchem Gleis`; czasownik ma formę `fährt`. Naprawa jest potrzebna, ponieważ zadanie sprawdzało właśnie `ankommen` i `abfahren` oraz praktyczną akceptację przesiadki.',
    'German 008 q1, druga próba: `ankommen` i szyk `fährt ... ab` są już użyte poprawnie, a zdanie 2 nadal jest poprawne. Zostały trzy formy do naprawy: `in Leipzig` (nie `im Lips`), `vor 13 Uhr` (nie `von 13 Uhr`) oraz `von welchem Gleis` (nie `von welchen Gleis`). `Ich kann in Berlin umsteigen.` jest gramatycznie poprawne, ale do celu rozmowy lepiej wyraża zgodę `Ja, das ist in Ordnung. Ich steige in Berlin um.`',
    'German 008 q1, naprawa: kompletne i poprawne. Uczeń użył `in Leipzig`, `vor 13 Uhr`, `ankommen`, jasnej akceptacji przesiadki z `Ich steige in Berlin um` oraz pytania `Von welchem Gleis fährt ... ab?`. Zadanie zamknięte.',
  ],
  misconceptions: [],
  next: ['Use evidence from German 007 and 008 to choose one later fluency or grammar target.'],
  published: {
    route: '/topics/german/sessions/008/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/008/',
  },
  archive: 'Revised after learner feedback: the original three-slot ticket exchange was too elementary for a rusty B1 learner. The permanent task now assesses supported transfer: stating an arrival deadline, accepting one change, and asking for departure time and platform. Provide the compact lexicon and reference; assess the separable-verb placement in `fährt ... ab` / `steige ... um`, not article recall or unprompted vocabulary. Accept natural punctuation and ae/oe/ue/ss variants. Expected core answers include `Ich möchte am Freitag vor 13 Uhr in Leipzig ankommen.`, `Ja, das ist in Ordnung.`, `Wann fährt der Zug in Hamburg ab?`, and `Von welchem Gleis fährt er ab?`.',
};
