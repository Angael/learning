import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  id: 'learn:german/012',
  topic: 'german',
  number: '012',
  type: 'practice',
  title: 'Co wolisz? lieber ... als ...',
  summary: 'Porównaj dwie opcje za pomocą lieber ... als i dodaj krótki powód z weil.',
  date: '2026-08-07',
  why: 'German 010 secured one supported weil clause in a social exchange, and German 011 secured connector-first word order. This adds the distinct capability of comparing two choices with lieber ... als and giving a reason, while all needed vocabulary remains visible.',
  buildsOn: ['learn:german/010', 'learn:german/011'],
  focus: [
    'Porównaj dwie opcje za pomocą lieber ... als.',
    'Dodaj jeden krótki powód z weil.',
    'Postaw odmieniony czasownik na końcu części z weil.',
  ],
  replyTasks: { 'learn:german/012:q1': [] },
  replyTaskState: { 'learn:german/012:q1': 'open' },
  evaluation: [],
  misconceptions: [],
  next: ['Oceń osobno budowę porównania lieber ... als oraz szyk czasownika po weil. Drobne błędy zapisu popraw krótko, bez osobnej sesji naprawczej.'],
  published: { route: '/topics/german/sessions/012/', canonicalUrl: 'https://learn.widacki.me/topics/german/sessions/012/' },
  archive: 'Candidate: state-and-explain-a-preference. Expected lines: `Ich trinke lieber Tee als Kaffee, weil Tee warm ist.` and `Ich lerne lieber morgens als abends, weil ich dann mehr Energie habe.` Accept a harmless article or punctuation slip. The target is the comparison frame and verb-final weil clause. The page supplies all vocabulary, so unknown-word retrieval is not assessed.',
};
