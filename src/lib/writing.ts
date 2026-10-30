import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'> | CollectionEntry<'locked'>;

/** Posts newest first, locked ones included. Drafts are included only in the dev server. */
export async function getPosts(): Promise<Post[]> {
  const show = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
  const posts = [...(await getCollection('writing', show)), ...(await getCollection('locked', show))];
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** 'YYYY-MM-DD', the site's date format. */
export const formatDate = (date: Date) => date.toISOString().slice(0, 10);
