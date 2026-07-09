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
      {
        title: 'Value types, reference types, and null',
        href: '/topics/csharp/lessons/002-value-reference-null/',
        summary: 'Predict assignment behavior for value types vs reference types, then use nullable reference types to reason about missing values.',
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
      {
        title: 'The ASP.NET Core request pipeline',
        href: '/topics/dotnet/lessons/002-request-pipeline/',
        summary: 'Separate middleware from endpoint handlers, follow await next(context), and understand short-circuiting.',
        date: '2026-07-06',
      },
      {
        title: 'Dependency injection and configuration',
        href: '/topics/dotnet/lessons/003-dependency-injection-configuration/',
        summary: 'Separate settings from code, register services once, and let endpoint handlers ask for what they need.',
        date: '2026-07-08',
      },
      {
        title: 'Service lifetimes',
        href: '/topics/dotnet/lessons/004-service-lifetimes/',
        summary: 'Choose Singleton, Scoped, or Transient by reasoning about how long an object should live and what state it can safely remember.',
        date: '2026-07-09',
      },
    ],
  },
  {
    title: 'German',
    slug: 'german',
    href: '/topics/german/',
    summary: 'B1 German reactivation: practical fluency, short production, correction, grammar repair, and useful real-life prompts.',
    lessons: [],
  },
];
