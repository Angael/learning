import type { ILearningSession } from '../../../../../data/learning/types.ts';

export const session: ILearningSession = {
  "id": "learn:german/006",
  "topic": "german",
  "number": "006",
  "type": "practice",
  "title": "Zamówienie w kawiarni ze wsparciem",
  "summary": "Uzupełnij trzy wypowiedzi klienta: zamów kawę i bułkę z poprawnym Akkusativ, odmów kolejnej propozycji i zakończ uprzejmie.",
  "date": "2026-07-21",
  "why": "Historical practice preserved during the typed learning-record migration.",
  "buildsOn": [],
  "focus": [
    "Uzupełnij trzy wypowiedzi klienta: zamów kawę i bułkę z poprawnym Akkusativ, odmów kolejnej propozycji i zakończ uprzejmie."
  ],
  "replyTasks": {
    "learn:german/006:q1": []
  },
  "replyTaskState": {
    "learn:german/006:q1": "legacy-complete"
  },
  "evaluation": [],
  "misconceptions": [],
  "next": [],
  "published": {
    "route": "/topics/german/sessions/006/",
    "canonicalUrl": "https://learn.widacki.me/topics/german/sessions/006/"
  },
  "archive": "# Notes: Supported café order\n\n## Session summary\n\nPublished 2026-07-21. This is one tightly supported practical exchange after secure German 005 production. The learner uses a visible case table, supplied café vocabulary, one model with different nouns, one selection step, and fixed polite frames. The event assesses two indefinite Akkusativ articles and two appropriate fixed replies, not open dialogue or independent practical fluency.\n\n## Reply task\n\n- ID: `[learn:german/006:q1]`\n- Difficulty: 3/5\n- Exact task: write exactly three customer replies in the supplied exchange; order `der Kaffee` and `das Brötchen` with `Ich hätte gern ..., bitte.`, decline one closed offer with the supplied fixed reply, and close politely with the supplied fixed reply.\n- Copy template is self-contained: it includes the ID, the relevant masculine/neuter article reference, supplied nouns with Polish meanings, all fixed frames, every staff prompt, scope limits, and three answer fields.\n\n## Exact prompt\n\n1. After `Guten Tag. Was möchten Sie?`, order `der Kaffee` and `das Brötchen` with `Ich hätte gern ..., bitte.`\n2. After `Möchten Sie sonst noch etwas?`, use the supplied negative reply.\n3. After `Bitte schön.`, use the supplied thanks and farewell.\n\nDo not change staff lines or add products, questions, or explanation.\n\n## Expected reasoning\n\n- `der Kaffee` is masculine. In the indefinite Akkusativ frame, `ein` becomes `einen`: `einen Kaffee`.\n- `das Brötchen` is neuter. Indefinite `ein` remains `ein` in Akkusativ: `ein Brötchen`.\n- The complete first reply is `Ich hätte gern einen Kaffee und ein Brötchen, bitte.`\n- The appropriate closed-offer reply is `Nein, danke.`\n- The supplied polite close is `Danke. Auf Wiedersehen.`\n\n## Expected answer\n\n1. `Ich hätte gern einen Kaffee und ein Brötchen, bitte.`\n2. `Nein, danke.`\n3. `Danke. Auf Wiedersehen.`\n\n## Acceptable variants\n\n- A leading `Guten Tag.` in reply 1 is acceptable, though not required.\n- `Ich möchte einen Kaffee und ein Brötchen, bitte.` is grammatically correct, but the supplied `Ich hätte gern ...` frame is the taught default.\n- `Vielen Dank. Auf Wiedersehen.` is acceptable in reply 3.\n- `Broetchen` is accepted for `Brötchen`; `ae/oe/ue/ss` substitutions remain allowed.\n- Minor punctuation, capitalization, or spacing errors are low-value if the target articles and fixed replies are correct.\n- Do not infer independent café fluency: all vocabulary and interaction frames were visible.\n\n## Evaluation\n\n### 2026-07-21 · `[learn:german/006:q1]`\n\n- Learner response: `Was moechten Sie? Ich haette gern einen Kaffe und ein Broetchen, bitte. Moechten Sie sonst noch etwas? Nein, danke. Bitte schoen. Danke, auf Wiedersehen!`\n- Result: the target Akkusativ articles are correct: `einen Kaffee` is masculine Akkusativ and `ein Brötchen` is neuter Akkusativ. The decline and farewell are also correct in meaning.\n- Feedback: copying the staff lines and spelling `Kaffee` as `Kaffe` are noted, but neither changes the grammar result and neither merits a separate repair or transcription task. Future feedback should correct comparable low-value slips inline while the next session uses fresh language.\n"
};
