#!/usr/bin/env node
// @ts-nocheck
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { next } from '../src/data/learning/next.ts';
import { learningWeeks } from '../src/data/learning/weeks.ts';

const root = resolve(import.meta.dirname, '..');
const topicsRoot = join(root, 'src/pages/topics');

const help = (error = '') => {
  if (error) console.error(`Error: ${error}\n`);
  console.log(`Learning history CLI

Usage:
  learning <help|-h|--help>
  learning sessions
  learning sessions <topic>
  learning sessions <topic> <number>
  learning sessions <topic> --create
  learning next
  learning weeks [YYYY-Www]

Examples:
  learning sessions dotnet
  learning sessions dotnet 007
  learning sessions german --create`);
  process.exitCode = error ? 1 : 0;
};

const loadSessions = async () => {
  const sessions = [];
  for (const topic of readdirSync(topicsRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name)) {
    const dir = join(topicsRoot, topic, 'sessions');
    if (!existsSync(dir)) continue;
    for (const number of readdirSync(dir, { withFileTypes: true }).filter((entry) => entry.isDirectory() && /^\d{3}$/.test(entry.name)).map((entry) => entry.name)) {
      const file = join(dir, number, '_session.ts');
      if (!existsSync(file)) continue;
      const { session } = await import(pathToFileURL(file).href);
      sessions.push(session);
    }
  }
  return sessions.sort((left, right) => left.topic.localeCompare(right.topic) || right.number.localeCompare(left.number));
};

const openCount = (session) => Object.entries(session.replyTaskState).filter(([id, state]) => state === 'open' && session.replyTasks[id].length === 0).length;
const printSession = (session) => {
  console.log(`${session.topic} / ${session.number} — ${session.type}`);
  console.log(session.title);
  console.log(`Why: ${session.why}`);
  console.log(`Focus: ${session.focus.join('; ')}`);
  console.log(`Builds on: ${session.buildsOn.length ? session.buildsOn.join(', ') : 'none recorded'}`);
  console.log(`Replies: ${Object.keys(session.replyTasks).length} (${openCount(session)} open)`);
};

const create = (topic, sessions) => {
  if (!sessions.some((session) => session.topic === topic)) {
    help(`Unknown topic: ${topic}`);
    return;
  }
  const numbers = sessions.filter((session) => session.topic === topic).map((session) => Number(session.number));
  const number = String(Math.max(...numbers) + 1).padStart(3, '0');
  const dir = join(root, 'src/pages/topics', topic, 'sessions', number);
  const id = `learn:${topic}/${number}`;
  const taskId = `${id}:q1`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, '_session.ts'), `import type { ILearningSession } from '../../../../../data/learning/types.ts';\n\nexport const session: ILearningSession = {\n  id: '${id}',\n  topic: '${topic}',\n  number: '${number}',\n  type: 'lesson',\n  title: 'Untitled session',\n  summary: 'Replace this scaffold summary before publication.',\n  date: new Date().toISOString().slice(0, 10),\n  why: 'Replace with a precise reason based on cited prior evidence.',\n  buildsOn: [],\n  focus: ['Replace with a distinct observable learning target.'],\n  replyTasks: { '${taskId}': [] },\n  replyTaskState: { '${taskId}': 'open' },\n  evaluation: [],\n  misconceptions: [],\n  next: [],\n  published: { route: '/topics/${topic}/sessions/${number}/', canonicalUrl: 'https://learn.widacki.me/topics/${topic}/sessions/${number}/' },\n  archive: '',\n};\n`);
  writeFileSync(join(dir, 'index.astro'), `---\nimport ReplyTask from '../../../../../components/ReplyTask.astro';\nimport SessionPage from '../../../../../components/SessionPage.astro';\nimport { session } from './_session.ts';\n---\n\n<SessionPage session={session} title=\"Session ${number}\" heading=\"Replace this heading\" lede=\"Replace this learner-facing summary.\" backHref=\"/topics/${topic}/\" backLabel=\"${topic} sessions\">\n  <ReplyTask id=\"${taskId}\" difficulty={3}>\n    <p>Replace this task before publication.</p>\n  </ReplyTask>\n</SessionPage>\n`);
  console.log(`Created scaffold: ${dir}`);
};

const args = process.argv.slice(2);
if (!args.length || ['help', '-h', '--help'].includes(args[0])) help();
else if (args[0] === 'next') {
  console.log(`${next.date} — ${next.status}`);
  for (const block of next.blocks) console.log(`${block.topic}  ${block.type}  ${block.why}`);
  if (!next.blocks.length) console.log('No structured blocks are currently planned.');
}
else if (args[0] === 'weeks' || args[0] === 'week') {
  const id = args[1];
  const weeks = id ? learningWeeks.filter((week) => week.id === id) : learningWeeks;
  if (!weeks.length) help(`Unknown week: ${id}`);
  else for (const week of weeks) {
    console.log(`${week.id} — ${week.intent.join('; ') || 'legacy record'}`);
    console.log(`Backlog: ${week.backlog.join('; ') || 'none recorded'}`);
  }
}
else if (args[0] !== 'sessions') help(`Unknown command: ${args[0]}`);
else {
  const sessions = await loadSessions();
  const [topic, detail] = args.slice(1);
  if (!topic) {
    for (const session of sessions) console.log(`${session.topic.padEnd(8)} ${session.number}  ${session.type.padEnd(8)} ${session.title}`);
  } else if (detail === '--create') {
    create(topic, sessions);
  } else {
    const topicSessions = sessions.filter((session) => session.topic === topic);
    if (!topicSessions.length) help(`Unknown topic: ${topic}`);
    else if (detail) {
      const session = topicSessions.find((item) => item.number === detail.padStart(3, '0'));
      if (!session) help(`Unknown session: ${topic} ${detail}`);
      else printSession(session);
    } else {
      console.log(`${topic} — ${topicSessions.length} sessions`);
      for (const session of topicSessions) console.log(`${session.number}  ${session.type.padEnd(8)} ${session.title} (${openCount(session)} open replies)`);
    }
  }
}
