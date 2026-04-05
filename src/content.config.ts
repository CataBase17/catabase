import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    slug: z.string(),
    subcategory: z.string().optional(),
    seeAlso: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
