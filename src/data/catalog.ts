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

export const topics: Topic[] = [
  {
    title: 'C#',
    slug: 'csharp',
    href: '/topics/csharp/',
    summary: 'Modern C# for a TypeScript/backend developer: types, runtime model, classes, async, LINQ, and API-ready language habits.',
    sessions: [
      {
        title: 'Constructors, properties, and state',
        href: '/topics/csharp/sessions/004-constructors-properties-and-state/',
        summary: 'Construct two independent stateful objects, control public mutation, and choose between an instance method and a static helper.',
        date: '2026-07-12',
      },
      {
        title: 'Static and instance members',
        href: '/topics/csharp/sessions/003-static-and-instance-members/',
        summary: 'Use one small class to distinguish object-owned state and behavior from type-owned static behavior, then predict and repair calls.',
        date: '2026-07-11',
      },
      {
        title: 'var and numeric types',
        href: '/topics/csharp/sessions/001-var-and-numeric-types/',
        summary: 'Learn why C# var is static inference, why integer division prints 2, and how int, double, float, and decimal interact.',
        date: '2026-07-05',
      },
      {
        title: 'Value types, reference types, and null',
        href: '/topics/csharp/sessions/002-value-reference-null/',
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
    sessions: [
      {
        title: 'Your first minimal API',
        href: '/topics/dotnet/sessions/001-your-first-minimal-api/',
        summary: 'Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS.',
        date: '2026-07-05',
      },
      {
        title: 'The ASP.NET Core request pipeline',
        href: '/topics/dotnet/sessions/002-request-pipeline/',
        summary: 'Separate middleware from endpoint handlers, follow await next(context), and understand short-circuiting.',
        date: '2026-07-06',
      },
      {
        title: 'Dependency injection and configuration',
        href: '/topics/dotnet/sessions/003-dependency-injection-configuration/',
        summary: 'Separate settings from code, register services once, and let endpoint handlers ask for what they need.',
        date: '2026-07-08',
      },
      {
        title: 'Service lifetimes',
        href: '/topics/dotnet/sessions/004-service-lifetimes/',
        summary: 'Choose Singleton, Scoped, or Transient by reasoning about how long an object should live and what state it can safely remember.',
        date: '2026-07-09',
      },
      {
        title: 'Minimal API Program.cs structure',
        href: '/topics/dotnet/sessions/005-program-structure-extension-methods/',
        summary: 'Read builder, services, app, and extension methods as a clear ASP.NET Core startup structure instead of magic.',
        date: '2026-07-09',
      },
      {
        title: 'Generic service registration',
        href: '/topics/dotnet/sessions/006-generic-service-registration/',
        summary: 'Explain why AddSingleton<AppInfo>() works: the generic method contains logic, and the type argument supplies service metadata.',
        date: '2026-07-10',
      },
    ],
  },
  {
    title: 'German',
    slug: 'german',
    href: '/topics/german/',
    summary: 'B1 German reactivation: practical fluency, short production, correction, grammar repair, and useful real-life prompts.',
    sessions: [
      {
        title: 'Dativ i Akkusativ: krok po kroku',
        href: '/topics/german/sessions/003-giving-and-returning-dialogue/',
        summary: 'Użyj tabeli przypadków, przepisz trzy krótkie wzory i dobierz rodzajniki do Dativ/Akkusativ bez otwartego dialogu.',
        date: '2026-07-12',
      },
      {
        title: 'Aktualizacja: szyk zdań podrzędnych',
        href: '/topics/german/sessions/002-weekend-update-subordinate-clauses/',
        summary: 'Napisz praktyczną aktualizację z Perfekt, weil, dass i ob, a następnie wskaż czasowniki odmienne i sprawdź szyk.',
        date: '2026-07-11',
      },
      {
        title: 'Diagnoza i pierwszy powrót do niemieckiego',
        href: '/topics/german/sessions/001-diagnostic/',
        summary: 'Historyczny zapis punktu wyjścia, pierwszego utrwalenia Perfekt i Dativ oraz kierunku dalszej reaktywacji B1.',
        date: '2026-07-06',
      },
    ],
  },
];
