import React from "react";
import Blogs from "../components/Blogs";
import { motion } from "framer-motion";

function Posts() {


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-3 w-full"
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
        <Blogs />
      </motion.div>
    </motion.div>
  );
}

export default Posts;
