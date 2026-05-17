import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const posts = await getCollection('blog');
  const published = posts
    .filter((p: any) => !p.data.draft)
    .sort((a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Samir George — Writing',
    description: 'Technical product building, systems thinking, and lessons from the trenches.',
    site: context.site,
    items: published.map((post: any) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/writing/${post.id}/`,
    })),
    customData: `<language>en</language>`,
  });
}
