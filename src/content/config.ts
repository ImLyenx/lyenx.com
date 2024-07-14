import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    isWIP: z.boolean().default(false),
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
