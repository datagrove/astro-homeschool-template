// import { getPermalink, getBlogPermalink, getAsset } from "./utils/permalinks";
import { getCollection, getEntryBySlug } from "astro:content";
const allposts = await getCollection("blog");
let mdPosts = allposts.map((post) => ({
  text: `${post.data.title}`,
  link: `${post.id}`,
}));

export const headerData = {
  links: [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Login",
      link: "/login",
    },
    {
      text: "About Us",
      link: "/src/content/blog/about.md",
    },
    {
      text: "FAQS",
      link: "/faqs",
    },
    {
      text: "Classifieds",
      link: "/classifieds",
    },
  ],
};
