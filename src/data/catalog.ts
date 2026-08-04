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
    title: 'ReleaseBoard Project',
    slug: 'releaseboard',
    summary: 'One evolving .NET backend: C#, ASP.NET Core, SQL Server, Dapper, messaging, tests, telemetry, containers, and operational evidence.',
  },
  {
    title: 'C# (deprecated)',
    slug: 'csharp',
    summary: 'Historical reference. New C# work continues in the ReleaseBoard Project.',
  },
  {
    title: '.NET (deprecated)',
    slug: 'dotnet',
    summary: 'Historical reference. New .NET work continues in the ReleaseBoard Project.',
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
