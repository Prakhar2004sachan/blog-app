import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import { RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import axios from "axios";
import { backendUrl } from "../App";

function Posts() {
  const [search, setSearch] = useState("");
  const [listPosts, setListPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // Fetch the posts from the backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/blog/list-posts`);
      console.log(res.data);
      setListPosts(res.data.posts); // Store posts in the state
      setFilteredPosts(res.data.posts); // Initially set filteredPosts to the same as listPosts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  console.log(listPosts);

  // Handle search input
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    // Filter posts based on the search query
    const filtered = listPosts.filter((post) =>
      post.heading.toLowerCase().includes(query)
    );

    setFilteredPosts(filtered); // Update filtered posts
  };

  useEffect(() => {
    fetchPosts(); // Call the fetch function when the component mounts
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-3"
    >

      {/* Heading */}
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-xl lg:text-5xl text-center font-bold mt-10"
      >
        Latest Posts
      </motion.h1>

      {/* Blogs List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Blogs count={filteredPosts.length} posts={filteredPosts} />
      </motion.div>
    </motion.div>
  );
}

export default Posts;
