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
    { title: 'Use Perfekt independently under practical pressure.', status: 'in-progress', evidence: 'German 005 used supported forms. German 009 now checks spaced retrieval of three common forms without supplying the participles.' },
    { title: 'Sustain a short corrected German chat.', status: 'in-progress', evidence: 'German 010 now checks a tightly guided three-turn social chat: refusal with a reason, an alternative time, and confirmation. Open dialogue remains deferred.' },
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
      sessionId: 'learn:german/009', closedReason: 'Published as German 009 with three controlled recent-event sentences that do not supply the assessed auxiliary-participle pairs.',
    },
    {
      id: 'guided-social-chat', status: 'done', type: 'practice', title: 'Guided social chat',
      why: 'German 008 secured a corrected three-move service exchange, while German 009 separately checks Perfekt. A tightly guided social exchange can now begin the chat milestone without repeating either target or requiring open role-play.',
      buildsOn: ['learn:german/008'], focus: ['Refuse with a short reason.', 'Offer a concrete alternative.', 'Confirm the agreement in a final turn.'],
      sessionId: 'learn:german/010', closedReason: 'Published as German 010 with a model using different details, visible vocabulary, and three constrained learner turns.',
    },
  ],
};
