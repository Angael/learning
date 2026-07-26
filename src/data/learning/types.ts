export const sessionTypes = ['lesson', 'practice', 'exam', 'project'] as const;
export type SessionType = (typeof sessionTypes)[number];

export type ReplyTaskState = 'open' | 'complete' | 'legacy-complete';
export type CurriculumCandidateStatus = 'ready' | 'blocked' | 'done' | 'dropped';
export type CurriculumMilestoneStatus = 'not-started' | 'in-progress' | 'secure';

export interface ILearningSession {
  id: string;
  topic: string;
  number: string;
  type: SessionType;
  title: string;
  summary: string;
  date: string;
  why: string;
  buildsOn: string[];
  focus: string[];
  replyTasks: Record<string, string[]>;
  replyTaskState: Record<string, ReplyTaskState>;
  evaluation: string[];
  misconceptions: string[];
  next: string[];
  published: {
    route: string;
    canonicalUrl: string;
  };
  archive: string;
}

export interface ICurriculumMilestone {
  title: string;
  status: CurriculumMilestoneStatus;
  evidence: string;
}

export interface ICurriculumCandidate {
  id: string;
  status: CurriculumCandidateStatus;
  type: SessionType;
  title: string;
  why: string;
  buildsOn: string[];
  focus: string[];
  blockedBy?: string[];
  sessionId?: string;
  closedReason?: string;
}

export interface ILearningTopic {
  id: string;
  title: string;
  goal: string;
  baseline: string[];
  policies: string[];
  progression: string[];
  milestones: ICurriculumMilestone[];
  candidates: ICurriculumCandidate[];
}

export interface ILearningWeek {
  id: string;
  intent: string[];
  coverage: string[];
  backlog: string[];
  outlook: string[];
  archive: string;
}
