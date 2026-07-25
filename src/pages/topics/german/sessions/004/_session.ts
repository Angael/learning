import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:german/004",
  "topic": "german",
  "number": "004",
  "type": "lesson",
  "title": "Dativ i Akkusativ: zaimki po jednej grupie",
  "summary": "Wskaż pełne grupy Dativ/Akkusativ i zastąp dokładnie jedną z nich zaimkiem, bez ćwiczenia kolejności dwóch zaimków.",
  "date": "2026-07-13",
  "why": "Historical lesson preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Wskaż pełne grupy Dativ/Akkusativ i zastąp dokładnie jedną z nich zaimkiem, bez ćwiczenia kolejności dwóch zaimków."
  ],
  "replyTasks": {
    "learn:german/004:q1": [],
    "learn:german/004:q2": []
  },
  "replyTaskState": {
    "learn:german/004:q1": "legacy-complete",
    "learn:german/004:q2": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/german/sessions/004/",
    "canonicalUrl": "https://learn.widacki.me/topics/german/sessions/004/"
  },
  "archive": "# Notes: Dativ and Akkusativ pronouns, one phrase at a time\n\n## Session summary\n\nPublished 2026-07-13; repaired 2026-07-14. This session repairs noun-phrase identification from session 003, then extends demonstrated noun-article case control into controlled single-pronoun substitutions. It deliberately avoids dual-pronoun order, possessives, Perfekt, subordinate clauses, and open dialogue.\n\n## 2026-07-14 repair\n\n- Added the required compact Nominativ/Akkusativ/Dativ article table as a permitted working aid.\n- Corrected the single-Akkusativ-pronoun frame: with a remaining Dativ noun phrase, the pronoun comes first (`Die Ärztin zeigt ihn der Frau.`).\n- Clarified the reply template so each answer must give the complete Dativ and Akkusativ noun phrase.\n- Content-accuracy and exercise-quality review both confirmed the scope remains coherent and the one-replacement limit remains appropriate.\n\n## Reply task\n\n- ID: `[learn:german/004:q1]`\n- Difficulty: 3/5\n- Exact task: correct three recipient/item sentences; name each complete Dativ and Akkusativ noun phrase; replace exactly one specified phrase with a pronoun; produce one constrained sentence and one recipient-pronoun version.\n- Copy template is embedded in the session and begins with the permanent ID.\n\n## Expected reasoning\n\n- A Dativ/Akkusativ answer names the whole case-bearing noun phrase, not the verb.\n- A1: `Mara gibt der Kollegin den Schlüssel.` Recipient `der Kollegin`; item `den Schlüssel`; replacement `Mara gibt ihr den Schlüssel.`\n- A2: `Der Vater zeigt dem Kind das Foto.` Recipient `dem Kind`; item `das Foto`; replacement `Der Vater zeigt es dem Kind.`\n- A3: `Ich schicke der Nachbarin die Nachricht.` Recipient `der Nachbarin`; item `die Nachricht`; replacement `Ich schicke ihr die Nachricht.`\n- Controlled production: `Ich zeige dem Kollegen das Foto.` Then: `Ich zeige ihm das Foto.`\n- Pronoun choice follows both role and grammatical gender: `ihm` is Dativ masculine/neuter, `ihr` Dativ feminine, `ihnen` Dativ plural; `ihn`, `sie`, and `es` are the relevant Akkusativ forms.\n\n## Acceptable variants\n\n- Minor punctuation and capitalization errors do not outweigh accurate phrase and pronoun choice.\n- `Ich zeige dem Kollegen das Foto.` / `Ich zeige ihm das Foto.` are intended answers; `dem Kollege` is not acceptable.\n- Do not require or reward a two-pronoun version; it is outside this session’s scope.\n\n## Likely misconception\n\n- Naming `gibt`, `zeigt`, or `schickt` as Dativ/Akkusativ rather than the complete noun phrase.\n- Naming only a bare noun and dropping its article.\n- Choosing pronoun only by gender and ignoring case, especially `ihm` versus `ihn`.\n- Replacing both complements and accidentally introducing unpractised pronoun word order.\n\n## Next hint\n\nCircle one full noun phrase first. Ask either `komu?` or `co?`; then use the table to replace only that circled phrase. Leave the other phrase untouched.\n\n## Student response\n\n### 2026-07-14 — `[learn:german/004:q1]`\n\n- Submitted A1–A3, B1–B3, and both C forms.\n- Response (verbatim, normalized only for Markdown):\n  > A1. Mara gibt der Kollegin den Schlüssel. Dativ: `der Kollegin`; Akkusativ: `den Schlüssel`.\n  >\n  > A2. Der Vater zeigt dem Kind den Foto. Dativ: `dem Kind`; Akkusativ: `den Foto`.\n  >\n  > A3. ich schicke der Nachbarin die Nachricht. Dativ: `der Nachbarin`; Akkusativ: `die Nachricht`.\n  >\n  > B1. Mara gibt ihr den Schlüssel. B2. Der Vater zeigt dem Kind es. B3. Ich schicke ihr die Nachricht.\n  >\n  > C. Ich zeige dem Kollegen das Foto. / Ich zeige ihm das Foto.\n- Substantive answer: A1 and A3 cases were correct; A2 used `den Foto` instead of `das Foto`. B1 and B3 were correct. B2 correctly chose `es` for `das Foto` but used noun-before-pronoun order (`Der Vater zeigt dem Kind es.`). C was fully correct apart from initial capitalization in the first sentence.\n\n## Evaluation\n\n### 2026-07-14\n\n- Strong evidence that Angeal identifies complete Dativ and Akkusativ noun phrases and selects the appropriate single pronoun.\n- Highest-value correction: `das Foto` is neuter, so A2 is `Der Vater zeigt dem Kind das Foto.` In B2, where the remaining Dativ group is a noun phrase, put Akkusativ `es` first: `Der Vater zeigt es dem Kind.`\n- Assigned a narrow repair on the current session: `[learn:german/004:q2]` asks only for corrected B2. No two-pronoun ordering is introduced.\n- Minor capitalization (`Ich`) is noted but not treated as a grammar blocker.\n\n### 2026-07-14 — `[learn:german/004:q2]`\n\n- Response: `Der Vater zeigt es dem Kind.`\n- Angeal clarified that the A2 form `den Foto` was produced by autocorrect rather than a deliberate article choice.\n- Repair is correct: Akkusativ pronoun `es` precedes the remaining Dativ noun phrase `dem Kind`.\n"
};
