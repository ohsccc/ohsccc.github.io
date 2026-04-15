import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const activities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/activities" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

const officers = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/officers" }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    email: z.string().email(),
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const alumni = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/alumni" }),
  schema: z.object({
    name: z.string(),
    position: z.string(),
    year: z.string(),  // 如 "2024-2025"
    photo: z.string().optional(),
    order: z.number().default(99),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/settings" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { activities, officers, alumni, settings };

