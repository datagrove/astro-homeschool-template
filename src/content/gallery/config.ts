import { z, defineCollection } from "astro:content";
import { image } from "../../../.astro/types";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    cover: image().refine((img) => img.width >= 1080, {
      message: "Cover image must be at least 1080 pixels wide!",
    }),
    Preview: z.string(),
  }),
});

export const collections = { blog };
