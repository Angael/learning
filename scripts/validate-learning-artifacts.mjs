import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const pagesRoot = join(root, 'src/pages');
const topicsRoot = join(pagesRoot, 'topics');
const errors = [];
const topicOpenTasks = new Map();

const directories = (path) => readdirSync(path)
  .map((name) => join(path, name))
  .filter((entry) => statSync(entry).isDirectory());

for (const topicDir of directories(topicsRoot)) {
  const topic = basename(topicDir);
  const sessionsDir = join(topicDir, 'sessions');
  if (!existsSync(sessionsDir)) {
    errors.push(`${relative(root, topicDir)}/sessions/ is missing`);
    continue;
  }

  const sessionDirs = directories(sessionsDir);
  for (const sessionDir of sessionDirs.filter((dir) => /^\d{3}$/.test(basename(dir)))) {
    const number = basename(sessionDir);
    const page = join(sessionDir, 'index.astro');
    const metadata = join(sessionDir, '_session.ts');
    if (!existsSync(page)) errors.push(`${relative(root, page)} is missing`);
    if (!existsSync(metadata)) errors.push(`${relative(root, metadata)} is missing`);
    if (!existsSync(page) || !existsSync(metadata)) continue;

    const pageText = readFileSync(page, 'utf8');
    if (!pageText.includes('<SessionPage') || !pageText.includes('session={session}')) {
      errors.push(`${relative(root, page)} must pass its typed session to SessionPage`);
    }

    let session;
    try {
      ({ session } = await import(pathToFileURL(metadata).href));
    } catch (error) {
      errors.push(`${relative(root, metadata)} cannot be imported: ${error.message}`);
      continue;
    }

    const expectedId = `learn:${topic}/${number}`;
    const expectedRoute = `/topics/${topic}/sessions/${number}/`;
    if (session.id !== expectedId) errors.push(`${relative(root, metadata)} id must be ${expectedId}`);
    if (session.topic !== topic) errors.push(`${relative(root, metadata)} topic must be ${topic}`);
    if (session.number !== number) errors.push(`${relative(root, metadata)} number must be ${number}`);
    if (session.published?.route !== expectedRoute) errors.push(`${relative(root, metadata)} route must be ${expectedRoute}`);
    if (!['lesson', 'practice', 'exam', 'project'].includes(session.type)) errors.push(`${relative(root, metadata)} has an invalid type`);
    for (const key of ['why', 'title', 'summary', 'date']) {
      if (!session[key]) errors.push(`${relative(root, metadata)} must provide ${key}`);
    }
    if (!Array.isArray(session.focus) || !session.focus.length) errors.push(`${relative(root, metadata)} must provide focus`);

    const pageIds = new Set(pageText.match(/learn:[A-Za-z0-9/_.:-]+/g) ?? []);
    const taskIds = Object.keys(session.replyTasks ?? {});
    for (const id of pageIds) if (!taskIds.includes(id)) errors.push(`${relative(root, metadata)} does not register ${id}`);
    for (const id of taskIds) if (!pageIds.has(id)) errors.push(`${relative(root, page)} does not render ${id}`);
    for (const id of taskIds) {
      if (!/^learn:(?:[a-z0-9/-]+:q\d+|\d{4}-\d{2}-\d{2}:b\d+)$/i.test(id)) errors.push(`${relative(root, metadata)} has invalid reply task ${id}`);
      if (!Array.isArray(session.replyTasks[id])) errors.push(`${relative(root, metadata)} reply task ${id} must be a string array`);
      const state = session.replyTaskState?.[id];
      if (!['open', 'complete', 'legacy-complete'].includes(state)) errors.push(`${relative(root, metadata)} must state ${id}`);
      if (state === 'open') topicOpenTasks.set(topic, (topicOpenTasks.get(topic) ?? 0) + 1);
    }
  }
}

for (const [topic, count] of topicOpenTasks) {
  if (count > 2) errors.push(`${topic} has ${count} open reply tasks; the limit is two`);
}

if (errors.length) {
  console.error('Learning validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Learning sessions valid: ${[...topicOpenTasks.keys()].length || 0} topics with open tasks; no topic exceeds two open reply tasks.`);
