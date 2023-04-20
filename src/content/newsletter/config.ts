import { z, defineCollection } from "astro:content";
import { image } from "../../../.astro/types";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    Image: z.image(),
    Preview: z.string(),
    Author: z.string(),
    Date: z.string(),
  }),
});

export const collections = { blog };
