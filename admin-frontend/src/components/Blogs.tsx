import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { useRecoilValue } from "recoil";
import { blogPostsAtom } from "../context/atom";
import { backendUrl } from "../App";
import axios from "axios";

type BlogPost = {
  id: string;
  mainImg: string;
  title: string;
  shortDescription: string;
  date: string;
};

const Blogs = () => {
  const blogPosts: BlogPost[] = useRecoilValue(blogPostsAtom);
  const [listPosts, setListPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get(backendUrl + "api/blog/list-posts");
    console.log(res.data);
    setListPosts(res.data.posts);
  };

  useEffect(() => {
    fetchPosts();
    console.log(listPosts);
  }, []);

  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3">
        {listPosts.map((post) => (
          <Blog
            key={post._id} // Added key prop
            id={post._id}
            date={new Date(post.date).toDateString()}
            title={post.heading}
            mainImg={post.mainImg}
            shortDescription={post.shortDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
