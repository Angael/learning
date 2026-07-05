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
    title: '.NET',
    slug: 'dotnet',
    href: '/topics/dotnet/',
    summary: 'C#, the .NET runtime, ASP.NET Core, testing, and deployment-aware backend services.',
    lessons: [],
  },
];
