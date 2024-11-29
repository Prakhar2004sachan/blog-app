import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Tags from "../components/Tags";
import Blog from "../components/Blog";
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

function Home() {
  const [listPosts, setListPosts] = useState<BlogPost[]>([]); // Posts data from the backend
  const numberOfPosts: number = 6;
  const [selectedTag, setSelectedTag] = useState<string>("All Categories"); // Currently selected tag

  // Fetch the blog posts from the backend
  const fetchPosts = async (tag: string = "All Categories") => {
    try {
      const res = await axios.get(`${backendUrl}api/blog/select`, {
        params: { tag }, // Pass the selected tag as a query parameter
      });
      let posts = res.data.posts;
      posts = posts.slice(0, numberOfPosts);
      setListPosts(posts); // Store posts in the state
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Fetch posts whenever the selected tag changes
  useEffect(() => {
    fetchPosts(selectedTag); // Fetch posts for the selected tag
  }, [selectedTag]);

  return (
    <div className="w-full">
      <Hero />
      {/* Pass the setSelectedTag function to the Tags component */}
      <Tags selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      {/* Displaying posts */}
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3">
        {listPosts.map((post) => (
          <Blog
            key={post._id}
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
}

export default Home;
