import type { ILearningSession } from './types.ts';

const modules = import.meta.glob('./sessions/*/*/session.ts', {
  eager: true,
  import: 'session',
}) as Record<string, ILearningSession>;

export const learningSessions = Object.values(modules);

export const sessionsForTopic = (topic: string) => learningSessions
  .filter((session) => session.topic === topic)
  .sort((left, right) => right.number.localeCompare(left.number));
