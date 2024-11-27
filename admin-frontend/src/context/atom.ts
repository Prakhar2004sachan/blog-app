import { atom } from "recoil";
 import { posts } from "../assets/posts"; // Importing the posts array
// import axios from "axios";
// import { backendUrl } from "../App";
// import { useState } from "react";

type BlogPost = {
  id: string;
  mainImg: string;
  title: string;
  tags: string[];
  shortDescription: string;
  date: string;
  expand?: {
    topic: string;
    shortDescription: string;
    img: string[];
    details: string;
  }[];
};

export const blogPostsAtom = atom<BlogPost[]>({
  key: "blogPosts",
  default: posts.flat(), // Flatten the nested array
});
