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
        title: 'Compact request model',
        href: '/topics/csharp/sessions/007-compact-request-model/',
        summary: 'Write one public positional record from a supplied three-field specification, construct one value, and read one generated property.',
        date: '2026-07-20',
      },
      {
        title: 'Public surface choice',
        href: '/topics/csharp/sessions/006-public-surface-choice/',
        summary: 'Choose a positional record for one fixed request value, a class for related guarded state, the safer property surface, and the result of two transition calls.',
        date: '2026-07-17',
      },
      {
        title: 'API models: records and classes',
        href: '/topics/csharp/sessions/005-api-models-records-and-classes/',
        summary: 'Choose a record for fixed request data and a class for guarded domain state, then contrast C# nominal types with TypeScript structural compatibility.',
        date: '2026-07-13',
      },
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
        title: 'Request model validation',
        href: '/topics/dotnet/sessions/007-request-model-validation/',
        summary: 'Trace JSON into a supplied request record, distinguish C# nullability guidance from runtime validation, and predict accepted and rejected responses.',
        date: '2026-07-16',
      },
      {
        title: 'Generic service registration',
        href: '/topics/dotnet/sessions/006-generic-service-registration/',
        summary: 'Explain why AddSingleton<AppInfo>() works: the generic method contains logic, and the type argument supplies service metadata.',
        date: '2026-07-10',
      },
      {
        title: 'Minimal API Program.cs structure',
        href: '/topics/dotnet/sessions/005-program-structure-extension-methods/',
        summary: 'Read builder, services, app, and extension methods as a clear ASP.NET Core startup structure instead of magic.',
        date: '2026-07-09',
      },
      {
        title: 'Service lifetimes',
        href: '/topics/dotnet/sessions/004-service-lifetimes/',
        summary: 'Choose Singleton, Scoped, or Transient by reasoning about how long an object should live and what state it can safely remember.',
        date: '2026-07-09',
      },
      {
        title: 'Dependency injection and configuration',
        href: '/topics/dotnet/sessions/003-dependency-injection-configuration/',
        summary: 'Separate settings from code, register services once, and let endpoint handlers ask for what they need.',
        date: '2026-07-08',
      },
      {
        title: 'The ASP.NET Core request pipeline',
        href: '/topics/dotnet/sessions/002-request-pipeline/',
        summary: 'Separate middleware from endpoint handlers, follow await next(context), and understand short-circuiting.',
        date: '2026-07-06',
      },
      {
        title: 'Your first minimal API',
        href: '/topics/dotnet/sessions/001-your-first-minimal-api/',
        summary: 'Create and reason about a tiny ASP.NET Core Minimal API from the terminal on Linux or macOS.',
        date: '2026-07-05',
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
        title: 'Zamówienie w kawiarni ze wsparciem',
        href: '/topics/german/sessions/006-supported-cafe-order/',
        summary: 'Uzupełnij trzy wypowiedzi klienta: zamów kawę i bułkę z poprawnym Akkusativ, odmów kolejnej propozycji i zakończ uprzejmie.',
        date: '2026-07-21',
      },
      {
        title: 'Ostatnie dni: krótka produkcja ze wsparciem',
        href: '/topics/german/sessions/005-recent-life-spaced-production/',
        summary: 'Napisz trzy krótkie zdania z podanym słownictwem, Perfekt i weil/dass, a potem wykonaj jedną kontrolowaną zamianę na zaimek.',
        date: '2026-07-16',
      },
      {
        title: 'Dativ i Akkusativ: zaimki po jednej grupie',
        href: '/topics/german/sessions/004-dative-accusative-pronouns/',
        summary: 'Wskaż pełne grupy Dativ/Akkusativ i zastąp dokładnie jedną z nich zaimkiem, bez ćwiczenia kolejności dwóch zaimków.',
        date: '2026-07-13',
      },
      {
        title: 'Dativ i Akkusativ: krok po kroku',
        href: '/topics/german/sessions/003-giving-and-returning-dialogue/',
        summary: 'Użyj tabeli przypadków, dobierz rodzajniki w nowych zdaniach i zbuduj jedno kontrolowane zdanie z Dativ/Akkusativ.',
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
