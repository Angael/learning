import { sessionsForTopic } from './learning/sessions.ts';

export type Session = {
  title: string;
  href: string;
  summary: string;
  date?: string;
};

export type Topic = {
  title: string;
  slug: string;
  href: string;
  summary: string;
  sessions: Session[];
};

const topicDefinitions = [
  {
    title: 'C#',
    slug: 'csharp',
    summary: 'Modern C# for a TypeScript/backend developer: types, runtime model, classes, async, LINQ, and API-ready language habits.',
  },
  {
    title: '.NET',
    slug: 'dotnet',
    summary: 'The .NET runtime, ASP.NET Core, testing, and deployment-aware backend services.',
  },
  {
    title: 'German',
    slug: 'german',
    summary: 'B1 German reactivation: practical fluency, short production, correction, grammar repair, and useful real-life prompts.',
  },
] as const;

export const topics: Topic[] = topicDefinitions.map((topic) => ({
  ...topic,
  href: `/topics/${topic.slug}/`,
  sessions: sessionsForTopic(topic.slug).map((session) => ({
    title: session.title,
    href: session.published.route,
    summary: session.summary,
    date: session.date,
  })),
}));
