import rss from "@astrojs/rss";
import { getAllPosts } from "@utils/getAllPosts";
import { SITE } from "@config";

export async function GET() {
  const posts = await getAllPosts();
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(post => ({
      link: post.href,
      title: post.title,
      description: post.description,
      pubDate: new Date(post.modDatetime ?? post.pubDatetime),
    })),
  });
}
