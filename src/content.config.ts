import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md, mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      image: z
        .object({
          url: image(),
          ariaLabel: z.string(),
          alt: z.string(),
          caption: z.string(),
          link: z.url(),
        })
        .optional(),
      audio: z.object({
        length: z.number().int(),
      }),
    }),
});

export const collections = {
  blog,
};
