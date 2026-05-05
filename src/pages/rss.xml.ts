import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';

const parser = new MarkdownIt();

export const GET = (async (context) => {
  const posts = await getCollection('blog');

  return rss({
    title: 'aelitneg',
    description: 'Engineering for creators.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}`,
      enclosure: {
        type: 'audio/mp3',
        url: `/audio/${post.id}.mp3`,
        length: post.data.audio.length,
      },
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    })),
    customData: `<language>en-gb</language>`,
  });
}) satisfies APIRoute;
