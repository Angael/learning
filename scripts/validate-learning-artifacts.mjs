import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, join, relative, sep } from 'node:path';

const root = process.cwd();
const pagesRoot = join(root, 'src/pages');
const topicsRoot = join(pagesRoot, 'topics');
const catalog = readFileSync(join(root, 'src/data/catalog.ts'), 'utf8');
const catalogRoutes = new Set(
  [...catalog.matchAll(/href:\s*['"](\/topics\/[^'"]+\/sessions\/[^'"]+\/?)['"]/g)]
    .map((match) => `${match[1].replace(/\/$/, '')}/`),
);
const filesystemRoutes = new Set();
const idOwners = new Map();
const errors = [];

const directories = (path) => readdirSync(path)
  .map((name) => join(path, name))
  .filter((entry) => statSync(entry).isDirectory());

for (const topicDir of directories(topicsRoot)) {
  for (const forbidden of ['lessons', 'tasks']) {
    if (existsSync(join(topicDir, forbidden))) errors.push(`${relative(root, topicDir)}/${forbidden}/ must not exist`);
  }

  const sessionsDir = join(topicDir, 'sessions');
  if (!existsSync(sessionsDir)) {
    errors.push(`${relative(root, topicDir)}/sessions/ is missing`);
    continue;
  }

  for (const sessionDir of directories(sessionsDir)) {
    const name = basename(sessionDir);
    if (!/^\d{3}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name)) errors.push(`${relative(root, sessionDir)} must use NNN-kebab-case`);

    const route = `/${relative(pagesRoot, sessionDir).split(sep).join('/')}/`;
    filesystemRoutes.add(route);
    const page = join(sessionDir, 'index.astro');
    const notes = join(sessionDir, 'notes.md');

    if (!existsSync(page)) errors.push(`${relative(root, page)} is missing`);
    if (!existsSync(notes)) errors.push(`${relative(root, notes)} is missing`);
    if (!existsSync(page)) continue;

    const pageText = readFileSync(page, 'utf8');
    const notesText = existsSync(notes) ? readFileSync(notes, 'utf8') : '';
    const ids = new Set(pageText.match(/learn:[A-Za-z0-9/_.:-]+/g) ?? []);
    for (const id of ids) {
      const current = relative(root, page);
      const owner = idOwners.get(id);
      if (owner && owner !== current) errors.push(`${id} appears in both ${owner} and ${current}`);
      else idOwners.set(id, current);
      if (!notesText.includes(id)) errors.push(`${relative(root, notes)} does not record ${id}`);
    }
  }
}

for (const route of filesystemRoutes) {
  if (!catalogRoutes.has(route)) errors.push(`${route} is missing from src/data/catalog.ts`);
}
for (const route of catalogRoutes) {
  if (!filesystemRoutes.has(route)) errors.push(`catalog route ${route} has no session directory`);
}

if (errors.length) {
  console.error('Learning session validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Learning sessions valid: ${filesystemRoutes.size} cataloged sessions, ${idOwners.size} unique reply IDs.`);
