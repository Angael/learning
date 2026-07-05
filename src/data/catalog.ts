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
    lessons: [
      {
        title: 'var and numeric types',
        href: '/topics/csharp/lessons/001-var-and-numeric-types/',
        summary: 'Learn why C# var is static inference, why integer division prints 2, and how int, double, float, and decimal interact.',
        date: '2026-07-05',
      },
    ],
  },
  {
    title: '.NET',
    slug: 'dotnet',
    href: '/topics/dotnet/',
    summary: 'The .NET runtime, ASP.NET Core, testing, and deployment-aware backend services.',
    lessons: [
      {
        title: 'Your first minimal API',
        href: '/topics/dotnet/lessons/001-your-first-minimal-api/',
        summary: 'Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS.',
        date: '2026-07-05',
      },
    ],
  },
];
