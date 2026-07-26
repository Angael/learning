import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:german/007",
  "topic": "german",
  "number": "007",
  "type": "practice",
  "title": "Wiadomość o paczce: czytanie i odpowiedź",
  "summary": "Przeczytaj krótką wiadomość od sąsiadki, znajdź trzy fakty i napisz dwa wsparte zdania: podziękowanie oraz termin odbioru.",
  "date": "2026-07-24",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Przeczytaj krótką wiadomość od sąsiadki, znajdź trzy fakty i napisz dwa wsparte zdania: podziękowanie oraz termin odbioru."
  ],
  "replyTasks": {
    "learn:german/007:q1": [
      "1. Sąsiadka Lena wzieła paczkę bo Marta nie była w domu, marta może dostać paczke jak przyjdzie do niej dzisiaj od 18 lub jutro od 8.\n2. Danke, dass du four mich das Paket angenommen hast. Ich hole es Morgen um 10 ab."
    ]
  },
  "replyTaskState": {
    "learn:german/007:q1": "complete"
  },
  "evaluation": [
    "German 007 q1: Odczyt faktów jest poprawny: Lena ma paczkę, przyjęła ją, bo Marty nie było w domu, a odbiór jest możliwy dziś od 18:00. Obie niemieckie konstrukcje są poprawnie zbudowane: `dass du ... angenommen hast` oraz rozdzielone `Ich hole ... ab`. Popraw tylko drobiazgi: `für`, małe `morgen` i `Uhr` — `Danke, dass du für mich das Paket angenommen hast. Ich hole es morgen um 10 Uhr ab.` Zadanie zamknięte; to nie wymaga osobnej naprawy."
  ],
  "misconceptions": [],
  "next": [
    "Kontynuuj istniejącą sesję German 008; tam sprawdzimy świeżą praktyczną wymianę, bez powtarzania wiadomości o paczce."
  ],
  "published": {
    "route": "/topics/german/sessions/007/",
    "canonicalUrl": "https://learn.widacki.me/topics/german/sessions/007/"
  },
  "archive": "# Notes: Package note reading response\n\n## Session summary\n\nPublished 2026-07-24. This is a fresh practical reading-to-response event after German 006 secured its supported article target. The learner reads one 47-word note from a neighbour, retrieves three stated facts, and writes exactly two supported German reply sentences. Vocabulary, the required `du hast angenommen` form, a compact `das Paket` / `es` aid, response frames, and valid pickup ranges are visible. The event does not assess possessives, independent Perfekt retrieval, two-pronoun order, or open dialogue.\n\n## Reply task\n\n- ID: `[learn:german/007:q1]`\n- Difficulty: 3/5\n- Exact task: give one compact Polish line naming who has the parcel now, why she accepted it, and the earliest collection time; then write exactly two German sentences, one thanks with `Danke, dass ...` and one valid collection confirmation with `Ich hole ... ab.`\n- Copy template is self-contained: it includes the ID, full source note, all three comprehension prompts, exact output limits, permitted aids, the referent of `es`, supplied forms and frames, valid pickup ranges, and three labelled answer fields.\n\n## Source note\n\n`Hallo Marta, ich bin Lena aus der Nachbarwohnung. Der Paketbote war heute hier. Ich habe das Paket für dich angenommen, weil du nicht zu Hause warst. Es liegt jetzt bei mir. Du kannst es heute ab 18 Uhr oder morgen ab 8 Uhr abholen. Viele Grüße, Lena`\n\nWhitespace-token count: 47.\n\n## Exact prompt\n\n1. Write one compact Polish line in the form `who has it now; why she accepted it; earliest collection time`.\n2. Write exactly one German thanks using `Danke, dass ... angenommen hast.`\n3. Write exactly one German collection confirmation using `Ich hole es heute/morgen um ... Uhr ab.`\n\nDo not add a question, explanation, or third German sentence.\n\n## Expected reasoning\n\n- Lena, the neighbour, has the parcel now. The courier no longer has it.\n- Lena accepted it because Marta was not at home.\n- `heute ab 18 Uhr` is earlier than `morgen ab 8 Uhr`; the earliest collection is today at 18:00.\n- Both source-text uses of `es` refer to neuter `das Paket`.\n- After `dass`, the supplied Perfekt elements close the clause as `... angenommen hast`.\n- In the main clause, separable `abholen` gives `Ich hole ... ab`.\n- A collection sentence must select a time inside one stated range: today at 18:00 or later, or tomorrow at 08:00 or later.\n\n## Expected answer\n\nA. `Lena; ponieważ Marty nie było w domu; dziś od 18:00.`\n\nB1. `Danke, dass du das Paket angenommen hast.`\n\nB2. `Ich hole es heute um 18 Uhr ab.`\n\n## Acceptable variants\n\n- The Polish line may use a full sentence or short labelled fragments if all three facts are clear.\n- `Lena, sąsiadka` or `sąsiadka Lena` is acceptable for the first fact. `Kurier` alone is not.\n- `bo Marta była poza domem` and equivalent concise Polish wording are acceptable for the reason.\n- B1 may use `Danke, dass du es angenommen hast.` because the parcel referent is clear. The taught default keeps `das Paket` visible.\n- `Vielen Dank, dass ...` is acceptable.\n- B2 may choose today at 18:00 or any clearly later time, or tomorrow at 08:00 or any clearly later time. A time before today's 18:00 is not supported.\n- `Ich hole das Paket ... ab.` is acceptable in B2, though the supplied frame uses `es`.\n- `ae/oe/ue/ss` substitutions are accepted. Minor punctuation, capitalization, or spelling slips are corrected inline when meaning and target order remain clear.\n- Do not infer independent Perfekt or open practical fluency: the vocabulary, verb form, word-order frame, pronoun referent, and time ranges are supplied.\n\n## Likely errors and next hint\n\n- If the learner names the courier, ask who has the parcel `jetzt` after accepting it.\n- If the learner chooses tomorrow 08:00 as earliest, compare `heute` with `morgen` before comparing clock numbers.\n- If the learner writes `dass du hast ... angenommen` or `dass du ... hast angenommen`, point to the model and ask which two words close the `dass` clause.\n- If the learner writes `Ich abhole ...`, point to the supplied main-clause frame `Ich hole ... ab.`\n\n## Evaluation\n\nAwaiting `[learn:german/007:q1]`.\n"
};
