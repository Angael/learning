import type { ILearningTopic } from '../../../data/learning/types.ts';

export const topic: ILearningTopic = {
  id: 'german',
  title: 'German',
  goal: 'Reactivate B1 German through practical reading, writing, chat-like production, and grammar accuracy under use.',
  baseline: ['Completed an A1–B1 course two to three years ago; current active production is rusty A2+/B1.', 'Reading is around B1 on short texts.', 'Needs production, correction, vocabulary reactivation, and grammar repair.', 'Accepts ae/oe/ue/ss; keyboard form is not a blocker.'],
  policies: ['Teach learner-facing German through Polish.', 'Give articles and Polish meanings when vocabulary is not the target.', 'Use modelled examples, controlled transformations, and constrained production before open dialogue.', 'Do not create separate repairs for minor spelling, punctuation, or response-format slips.'],
  progression: ['Reactivation of practical sentences, cases, and tense.', 'Production speed and short dialogues.', 'Grammar repair from evidence.', 'Reading and listening-like practice.', 'Short writing with correction.', 'Fluency in opinions, plans, work, and storytelling.'],
  milestones: [
    { title: 'Write simple recent-life sentences with correction support.', status: 'secure', evidence: 'German 001 and 005.' },
    { title: 'Use selected Akkusativ/Dativ articles in supported practical patterns.', status: 'secure', evidence: 'German 003, 004, and 006.' },
    { title: 'Read a short practical note and produce a constrained response.', status: 'secure', evidence: 'German 007: correct fact retrieval and both supported German sentence patterns; only minor spelling/format slips.' },
    { title: 'Use Perfekt independently under practical pressure.', status: 'secure', evidence: 'German 009: correct retrieval of `habe ... gearbeitet` and `bin ... gegangen`, followed by one successful repair of `sehen → gesehen`.' },
    { title: 'Sustain a short corrected German chat.', status: 'secure', evidence: 'German 010: completed a coherent three-turn social chat with a polite refusal, correct weil clause, concrete alternative, and confirmation; only two small form corrections (`keine Zeit`, `uns treffen`). Open dialogue remains deferred.' },
    { title: 'Order a short past account with simple connectors.', status: 'in-progress', evidence: 'German 011 now checks zuerst, dann, danach and verb-second order while completed Perfekt forms remain visible.' },
  ],
  candidates: [
    {
      id: 'parcel-response-evidence', status: 'done', type: 'practice', title: 'Choose the next German transfer from parcel-response evidence',
      why: 'German 007 supplied the current supported reading-to-response target. Its reply confirms that the next transfer can stay practical rather than repeat this pattern.',
      buildsOn: ['learn:german/007'], focus: ['Use exact learner evidence to select a fresh practical target.'],
      sessionId: 'learn:german/007', closedReason: 'Correct fact retrieval and both target sentence patterns; only low-value spelling and response-format slips.',
    },
    {
      id: 'supported-practical-exchange', status: 'done', type: 'practice', title: 'Fresh supported practical exchange',
      why: 'German needs frequent contact. Use new material and a distinct target without repeating the parcel-message task.',
      buildsOn: ['learn:german/006'], focus: ['Read or produce a short useful exchange with visible vocabulary and controlled output.'],
      sessionId: 'learn:german/008', closedReason: 'Completed as German 008: the learner repaired the supported railway exchange and correctly used arrival, transfer acceptance, and a platform question.',
    },
    {
      id: 'independent-perfekt-retrieval', status: 'done', type: 'practice', title: 'Retrieve common Perfekt forms',
      why: 'German 005 supplied exact Perfekt forms, and German 008 showed that constrained production succeeds after correction. A spaced task can now test auxiliary and participle retrieval while keeping meaning and sentence structure visible.',
      buildsOn: ['learn:german/005', 'learn:german/008'], focus: ['Retrieve haben or sein and Partizip II for three common verbs in a short practical report.'],
      sessionId: 'learn:german/009', closedReason: 'German 009 closed: correct independent retrieval for `arbeiten` and `gehen`, then one successful focused repair of `sehen → gesehen` and `Am Abend`.',
    },
    {
      id: 'guided-social-chat', status: 'done', type: 'practice', title: 'Guided social chat',
      why: 'German 008 secured a corrected three-move service exchange, while German 009 separately checks Perfekt. A tightly guided social exchange can now begin the chat milestone without repeating either target or requiring open role-play.',
      buildsOn: ['learn:german/008'], focus: ['Refuse with a short reason.', 'Offer a concrete alternative.', 'Confirm the agreement in a final turn.'],
      sessionId: 'learn:german/010', closedReason: 'Completed with all three chat moves and correct weil verb placement; only low-value corrections were `keine Zeit` and reflexive `uns treffen`.',
    },
    {
      id: 'sequence-a-short-account', status: 'done', type: 'practice', title: 'Sequence a short past account',
      why: 'German 009 secured the needed Perfekt forms. The next distinct transfer is to order three past events with simple connectors while keeping verb forms visible, so it does not repeat independent Perfekt retrieval or the open social chat.',
      buildsOn: ['learn:german/009'], focus: ['Use zuerst, dann, and danach.', 'Keep the finite auxiliary in second position.'],
      sessionId: 'learn:german/011', closedReason: 'Published as German 011 with three supplied Perfekt chunks and a constrained event-order task.',
    },
  ],
};
