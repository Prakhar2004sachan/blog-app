import { atom } from "recoil";
import { posts } from "../assets/posts"; // Ensure this path is correct

const blogPostsAtom = atom({
  key: "blogPosts", // unique ID
  default: posts, // Use the correct default data for posts
});

export { blogPostsAtom };
