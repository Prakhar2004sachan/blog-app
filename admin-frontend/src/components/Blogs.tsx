import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { backendUrl } from "../App";
import axios from "axios";

// Define the structure of a blog post
type BlogPost = {
  _id: string;
  mainImg: string;
  heading: string;
  shortDescription: string;
  date: string;
};

const Blogs = () => {
  const [listPosts, setListPosts] = useState<BlogPost[]>([]); // Posts data from the backend
  const [search, setSearch] = useState<string>(""); // Search query state
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]); // Filtered posts based on search query

  // Fetch the blog posts from the backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/blog/list-posts`);
      setListPosts(res.data.posts); // Store posts in the state
      setFilteredPosts(res.data.posts); // Set filtered posts initially to all posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
     const query = e.target.value.toLowerCase();
     setSearch(query);

     const filtered = listPosts.filter(
       (post) =>
         post.heading.toLowerCase().includes(query) ||
         post.shortDescription.toLowerCase().includes(query) ||
         post.tags.some((tag) => tag.toLowerCase().includes(query)) // Search within tags array
     );
     setFilteredPosts(filtered);
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, []);

  return (
    <div className="my-[2rem]">
      {/* Search Bar */}
      <div className="flex gap-4 mb-6 px-4 border-2 border-black rounded-full">
        <input
          type="text"
          className="w-full h-10 px-4 py-2 rounded-full outline-none"
          placeholder="Search for posts..."
          value={search}
          onChange={handleSearch} // Handle search input
        />
      </div>

      {/* Displaying posts */}
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <Blog
              key={post._id}
              id={post._id}
              date={new Date(post.date).toDateString()}
              title={post.heading}
              mainImg={post.mainImg}
              shortDescription={post.shortDescription}
            />
          ))
        ) : (
          <p className="text-xl font-medium">No blog posts available</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
