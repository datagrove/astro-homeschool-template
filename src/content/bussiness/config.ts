import { z, defineCollection } from "astro:content";
import { image } from "../../../.astro/types";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    Image: z.image(),
    Preview: z.string(),
    Address: z.string(),
    Zip: z.number(),
    Phone: z.string(),
    Category: z.string(),
    Date: z.string(),
  }),
});

export const collections = { blog };
