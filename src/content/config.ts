import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(
      z.object({ name: z.string(), color: z.string(), icon: z.string() }),
    ),
    description: z.string(),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
