import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { lockedLoader, publicLoader } from './lib/private-posts';

// Posts are all written in private/writing/ (see lib/private-posts.ts).

// Unlocked posts, copied into src/content/writing/.
const writing = defineCollection({
  loader: publicLoader(),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    /** Drafts show up in `npm run dev` but are never built or published. */
    draft: z.boolean().default(false),
  }),
});

// Posts with a `password`, encrypted into src/content/locked/.
const locked = defineCollection({
  loader: lockedLoader(),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    salt: z.string(),
    iv: z.string(),
    ciphertext: z.string(),
  }),
});

export const collections = { writing, locked };
