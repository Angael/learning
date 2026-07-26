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
    { title: 'Read a short practical note and produce a constrained response.', status: 'in-progress', evidence: 'German 007 awaits reply evidence.' },
    { title: 'Use Perfekt independently under practical pressure.', status: 'not-started', evidence: 'Supported forms are secure; independent retrieval remains untested.' },
    { title: 'Sustain a short corrected German chat.', status: 'not-started', evidence: 'Open dialogue is deliberately deferred.' },
  ],
  candidates: [
    {
      id: 'parcel-response-evidence', status: 'blocked', type: 'practice', title: 'Choose the next German transfer from parcel-response evidence',
      why: 'German 007 already supplies the current supported reading-to-response target. Its reply should determine whether to advance fluency, revisit a grammar distinction, or add support.',
      buildsOn: ['learn:german/007'], focus: ['Use exact learner evidence to select a fresh practical target.'], blockedBy: ['Await [learn:german/007:q1] or explicitly close it as stale.'],
    },
    {
      id: 'supported-practical-exchange', status: 'ready', type: 'practice', title: 'Fresh supported practical exchange',
      why: 'German needs frequent contact. Use new material and a distinct target without repeating the parcel-message task.',
      buildsOn: ['learn:german/006'], focus: ['Read or produce a short useful exchange with visible vocabulary and controlled output.'],
    },
  ],
};
