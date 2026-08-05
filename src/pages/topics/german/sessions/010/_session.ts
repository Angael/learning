import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/010',
  topic: 'german',
  number: '010',
  type: 'practice',
  title: 'Krótki czat: odmowa i nowa propozycja',
  summary: 'Odpowiedz w krótkim czacie: grzecznie odmów, podaj prosty powód, zaproponuj inny termin i potwierdź ustalenie.',
  date: '2026-07-29',
  why: 'German 008 secured a corrected three-move service exchange, while German 009 separately keeps Perfekt retrieval open. This adds the distinct capability of keeping a short social chat coherent through a refusal, a reason, an alternative, and a final confirmation, with strong support rather than open role-play.',
  buildsOn: ['learn:german/008'],
  focus: [
    'Odmów grzecznie i podaj krótki powód z weil.',
    'Zaproponuj konkretny inny termin.',
    'Potwierdź termin w ostatniej turze czatu.',
  ],
  replyTasks: {
    'learn:german/010:q1': [
      'Leider habe ich kein Zeit,.weil ich arbeiten muss.\nVielleicht können wir am Sonntag um 15 Uhr treffen?\nDas passt mir gut. Bis Sonntag!',
    ],
  },
  replyTaskState: { 'learn:german/010:q1': 'complete' },
  evaluation: [
    'German 010 q1: Zadanie jest wykonane. Uczeń zachował trzy tury: uprzejmą odmowę z powodem, konkretną propozycję niedzieli o 15:00 oraz potwierdzenie. Szyk po `weil` jest poprawny: `weil ich arbeiten muss`. Dwie małe korekty: `keine Zeit` (bo `die Zeit`) oraz `Können wir uns ... treffen?` (czasownik zwrotny `sich treffen`). Interpunkcja w `Zeit, weil` jest drobną uwagą. Osobna naprawa nie jest potrzebna.',
  ],
  misconceptions: [],
  next: ['Krótki prowadzony czat jest wystarczająco pewny. Następne otwarte zadanie German 011 sprawdza kolejność wydarzeń z zuerst, dann i danach.'],
  published: {
    route: '/topics/german/sessions/010/',
    canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/010/',
  },
  archive: 'Candidate: guided-social-chat. Expected core reply: `Am Samstag kann ich leider nicht, weil ich arbeiten muss.`, `Hast du am Sonntag um 15 Uhr Zeit?`, `Ja, das passt gut. Bis Sonntag!` Accept another natural supported alternative that preserves all four moves: polite refusal, reason with the finite verb at the end after weil, concrete Sunday-at-15 alternative, and confirmation. The model uses different plans and times. This begins the chat milestone under tight constraints and does not assess the still-open Perfekt forms from German 009.',
};
