import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    type: z.enum(["School", "Personal"]),
    isWIP: z.boolean().default(false),
    tags: z.array(z.string()),
    description: z.string(),
    github: z.string(),
    demo: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
