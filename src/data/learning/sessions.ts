import type { ILearningSession } from './types.ts';

const modules = import.meta.glob('/src/pages/topics/*/sessions/*/_session.ts', {
  eager: true,
  import: 'session',
}) as Record<string, ILearningSession>;

export const learningSessions = Object.values(modules);

export const sessionsForTopic = (topic: string) => learningSessions
  .filter((session) => session.topic === topic)
  .sort((left, right) => right.number.localeCompare(left.number));

/** A session is complete only when it has learner tasks and each one is closed. */
export const isSessionComplete = (session: ILearningSession) => {
  const taskIds = Object.keys(session.replyTasks);
  return taskIds.length > 0
    && taskIds.every((taskId) => {
      const state = session.replyTaskState[taskId];
      return state === 'complete' || state === 'legacy-complete';
    });
};
