import React, { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import { RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import axios from "axios";
import { backendUrl } from "../App";

function Posts() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    // Optionally: filter posts dynamically based on the search
  };

  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-3"
    >
      {/* Search Bar */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="px-4 mt-6 flex gap-4 items-center border-2 border-black rounded-full"
      >
        <input
          type="text"
          className="w-full h-10 px-4 py-2 rounded-full outline-none"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <RiSearch2Line className="text-xl cursor-pointer" />
      </motion.div>

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
        <Blogs count={15} />
      </motion.div>
    </motion.div>
  );
}

export default Posts;
