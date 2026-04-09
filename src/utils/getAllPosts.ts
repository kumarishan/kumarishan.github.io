import { getCollection } from "astro:content";
import { SITE } from "@config";
import {
  standalonePostRegistry,
  type StandalonePost,
} from "@content/standalonePostRegistry";
import { slugifyAll } from "./slugify";

export interface PostListItem {
  title: string;
  description: string;
  pubDatetime: Date;
  modDatetime?: Date | null;
  author: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  /** Unified navigation target — works for both collection and standalone posts */
  href: string;
}

function standalonePostFilter(post: StandalonePost): boolean {
  const isPublishTimePassed =
    Date.now() >
    new Date(post.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return !post.draft && (import.meta.env.DEV || isPublishTimePassed);
}

/**
 * Returns all posts (content collection + standalone registry) merged, filtered,
 * and sorted by date descending.
 */
export async function getAllPosts(): Promise<PostListItem[]> {
  const collectionEntries = await getCollection("blog", ({ data }) => {
    const isPublishTimePassed =
      Date.now() >
      new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
    return !data.draft && (import.meta.env.DEV || isPublishTimePassed);
  });

  const collectionItems: PostListItem[] = collectionEntries.map(entry => ({
    title: entry.data.title,
    description: entry.data.description,
    pubDatetime: entry.data.pubDatetime,
    modDatetime: entry.data.modDatetime,
    author: entry.data.author,
    tags: entry.data.tags,
    featured: entry.data.featured,
    draft: entry.data.draft,
    href: `/posts/${entry.slug}/`,
  }));

  const standaloneItems: PostListItem[] = standalonePostRegistry
    .filter(standalonePostFilter)
    .map(post => ({ ...post }));

  const all = [...collectionItems, ...standaloneItems];

  return all.sort(
    (a, b) =>
      Math.floor(new Date(b.modDatetime ?? b.pubDatetime).getTime() / 1000) -
      Math.floor(new Date(a.modDatetime ?? a.pubDatetime).getTime() / 1000)
  );
}

/**
 * Returns posts filtered by a slugified tag.
 */
export async function getPostsByTagUnified(
  tag: string
): Promise<PostListItem[]> {
  const all = await getAllPosts();
  return all.filter(post => slugifyAll(post.tags).includes(tag));
}

/**
 * Returns all unique tags across both collection and standalone posts.
 */
export async function getAllUniqueTags(): Promise<
  { tag: string; tagName: string }[]
> {
  const all = await getAllPosts();
  const { slugifyStr } = await import("./slugify");

  const tags = all
    .flatMap(post => post.tags)
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) => self.findIndex(t => t.tag === value.tag) === index
    )
    .sort((a, b) => a.tag.localeCompare(b.tag));

  return tags;
}
