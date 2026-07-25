export const sessionTypes = ['lesson', 'practice', 'exam', 'project'] as const;
export type SessionType = (typeof sessionTypes)[number];

export type ReplyTaskState = 'open' | 'complete' | 'legacy-complete';

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

export interface ILearningPlanBlock {
  topic: string;
  type: SessionType;
  why: string;
  buildsOn: string[];
  focus: string[];
  scope: string[];
  replyTaskCount: number;
}

export interface ILearningNext {
  date: string;
  status: 'planned' | 'implemented' | 'replanning';
  blocks: ILearningPlanBlock[];
  archive: string;
}

export interface ILearningWeek {
  id: string;
  intent: string[];
  days: Array<{
    date: string;
    plan: string;
  }>;
  coverage: string[];
  backlog: string[];
  outlook: string[];
  archive: string;
}
