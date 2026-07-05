export type Lesson = {
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
  lessons: Lesson[];
};

export const topics: Topic[] = [
  {
    title: 'C#',
    slug: 'csharp',
    href: '/topics/csharp/',
    summary: 'Modern C# for a TypeScript/backend developer: types, runtime model, classes, async, LINQ, and API-ready language habits.',
    lessons: [],
  },
  {
    title: '.NET',
    slug: 'dotnet',
    href: '/topics/dotnet/',
    summary: 'The .NET runtime, ASP.NET Core, testing, and deployment-aware backend services.',
    lessons: [
      {
        title: 'Your first minimal API',
        href: '/lessons/dotnet/0001-your-first-minimal-api/',
        summary: 'Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS.',
        date: '2026-07-05',
      },
    ],
  },
];
