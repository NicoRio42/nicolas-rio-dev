import { z, defineCollection } from "astro:content";

const experiencesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      employerOrClient: z.string(),
      link: z.string().url(),
      image: image(),
      from: z.date(),
      to: z.date().optional(),
    }),
});

const referencesCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      image: image(),
    }),
});

export const collections = {
  experiences: experiencesCollection,
  references: referencesCollection,
};
