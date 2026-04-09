export interface StandalonePost {
  title: string;
  description: string;
  pubDatetime: Date;
  modDatetime?: Date | null;
  author: string;
  tags: string[];
  featured?: boolean;
  draft?: boolean;
  ogImage?: string;
  /** The URL path for this post, e.g. "/posts/my-interactive-essay/" */
  href: string;
}

/**
 * Registry for standalone HTML/JS posts (src/pages/posts/[name]/index.astro).
 * Add one entry per post so it appears in listings, RSS, and tags.
 */
export const standalonePostRegistry: StandalonePost[] = [
  {
    title: "Where AI Belongs in Agentic Interfaces",
    description:
      "Chat placement is not a cosmetic choice. It is one of the clearest signals of what role your AI is supposed to play in the product.",
    pubDatetime: new Date("2025-06-21T09:12:47Z"),
    author: "Kumar Ishan",
    tags: ["agentic interface", "design", "ux"],
    featured: true,
    draft: false,
    href: "/posts/agent-interface-layout/",
  },
  {
    title: "Why This Blog Exists",
    description:
      "I wanted a place to think in public about AI, product design, engineering judgment, and the systems that shape how we work.",
    pubDatetime: new Date("2024-07-13T09:12:47Z"),
    author: "Kumar Ishan",
    tags: ["writing", "blog", "personal"],
    featured: true,
    draft: false,
    href: "/posts/lets-begin/",
  },
  {
    title: "Git-Native Agentic Development Flow",
    description:
      "Most teams are bolting agents onto existing workflows. The teams who get this right will build a process whose primitives agents already speak fluently.",
    pubDatetime: new Date("2026-04-09T10:00:00Z"),
    author: "Kumar Ishan",
    tags: ["agentic interface", "engineering", "git", "workflow"],
    featured: true,
    draft: false,
    href: "/posts/git-as-agentic-interface/",
  },
];
