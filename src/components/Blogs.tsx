import React from "react";
import Blog from "./Blog";
import { useRecoilValue } from "recoil";
import { blogPostsAtom } from "../context/atom.js";

type BlogPost = {
  id: number;
  mainImg: string;
  title: string;
  shortDescription: string;
  date: string;
};

const Blogs = () => {
  const blogPosts: BlogPost[] = useRecoilValue(blogPostsAtom);

  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3">
        {blogPosts.map((post) => (
          <Blog
            key={post.id} // Added key prop
            id={post.id}
            date={post.date}
            title={post.title}
            mainImg={post.mainImg}
            shortDescription={post.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
