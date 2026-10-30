import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { glob, type Loader, type LoaderContext } from 'astro/loaders';
import { parse as parseYaml } from 'yaml';
import { decrypt, encrypt } from './crypto';

/**
 * All posts are written in private/writing/ (its own private repo, gitignored
 * here). Posts with a `password` are encrypted into src/content/locked/; the
 * rest are copied into src/content/writing/. Those two folders are what this
 * repo commits, and the deployed site is built from them alone.
 */
const SOURCE = 'private/writing';
const PUBLIC_OUT = 'src/content/writing';
const LOCKED_OUT = 'src/content/locked';

const GENERATED_NOTE = '# Copied from private/writing/; edit it there, not here.';

interface SourcePost {
  id: string;
  file: string;
  path: string;
  raw: string;
  password: string | null;
  meta: Record<string, unknown>;
  body: string;
}

function readSources(root: string, logger: LoaderContext['logger']): SourcePost[] {
  const dir = join(root, SOURCE);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .flatMap((file) => {
      const path = join(dir, file);
      const raw = readFileSync(path, 'utf8');
      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!match) {
        logger.warn(`${file}: missing front matter, skipped.`);
        return [];
      }
      const { password, ...meta } = parseYaml(match[1]) ?? {};
      return [{ id: file.replace(/\.md$/, ''), file, path, raw, password: password ? String(password) : null, meta, body: match[2] }];
    });
}

/** Like Astro's glob loader, but first copies the unlocked posts into place. */
export function publicLoader(): Loader {
  const inner = glob({ pattern: '**/*.md', base: `./${PUBLIC_OUT}` });
  return {
    name: 'public-posts',
    load: async (context) => {
      const root = fileURLToPath(context.config.root);
      const sync = () => copyPublic(root, context.logger);
      sync();
      watchSources(context, root, sync);
      await inner.load(context);
    },
  };
}

function copyPublic(root: string, logger: LoaderContext['logger']) {
  const outDir = join(root, PUBLIC_OUT);
  mkdirSync(outDir, { recursive: true });
  for (const post of readSources(root, logger)) {
    const outFile = join(outDir, post.file);
    if (post.password) {
      // A post that just got locked must not stay published in the clear.
      rmSync(outFile, { force: true });
      continue;
    }
    const copy = post.raw.replace(/^---\r?\n/, `---\n${GENERATED_NOTE}\n`);
    if (!existsSync(outFile) || readFileSync(outFile, 'utf8') !== copy) {
      writeFileSync(outFile, copy);
      logger.info(`Copied ${post.file}`);
    }
  }
}

/** Locked posts: rendered, encrypted to JSON, and loaded from that JSON. */
export function lockedLoader(): Loader {
  return {
    name: 'locked-posts',
    load: async (context) => {
      const root = fileURLToPath(context.config.root);
      const sync = async () => {
        await encryptLocked(context, root);
        await loadEncrypted(context, join(root, LOCKED_OUT));
      };
      await sync();
      watchSources(context, root, sync);
    },
  };
}

async function encryptLocked({ logger, renderMarkdown }: LoaderContext, root: string) {
  const outDir = join(root, LOCKED_OUT);
  mkdirSync(outDir, { recursive: true });

  for (const post of readSources(root, logger)) {
    const outFile = join(outDir, `${post.id}.json`);
    if (!post.password) {
      // A post that just got unlocked is published by publicLoader instead.
      rmSync(outFile, { force: true });
      continue;
    }

    const { html } = await renderMarkdown(post.body, { fileURL: pathToFileURL(post.path) });

    // Re-encrypting makes a new random salt, so skip unchanged posts to keep git diffs quiet.
    if (existsSync(outFile)) {
      const { salt, iv, ciphertext, ...oldMeta } = JSON.parse(readFileSync(outFile, 'utf8'));
      const sameMeta = JSON.stringify(oldMeta) === JSON.stringify(post.meta);
      if (sameMeta && (await decrypt({ salt, iv, ciphertext }, post.password)) === html) continue;
    }

    const sealed = await encrypt(html, post.password);
    writeFileSync(outFile, JSON.stringify({ ...post.meta, ...sealed }, null, 2) + '\n');
    logger.info(`Encrypted ${post.file}`);
  }
}

function loadEncrypted({ store, parseData }: LoaderContext, outDir: string) {
  store.clear();
  if (!existsSync(outDir)) return;
  return Promise.all(
    readdirSync(outDir)
      .filter((f) => f.endsWith('.json'))
      .map(async (file) => {
        const id = file.replace(/\.json$/, '');
        const data = await parseData({ id, data: JSON.parse(readFileSync(join(outDir, file), 'utf8')) });
        store.set({ id, data });
      }),
  );
}

/** In dev, re-sync whenever a post in private/writing/ is saved. */
function watchSources({ watcher }: LoaderContext, root: string, sync: () => unknown) {
  const dir = join(root, SOURCE);
  watcher?.add(dir);
  watcher?.on('all', (_event, path) => {
    if (path.startsWith(dir) && path.endsWith('.md')) sync();
  });
}
