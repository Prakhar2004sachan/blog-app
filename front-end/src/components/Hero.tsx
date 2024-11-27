import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      className="mt-[3rem] flex flex-col"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-md text-blue-800 font-semibold">Blog</p>
      <motion.h1
        className="hero-heading mt-2 sm:mt-6 text-4.5xl py-2 font-bold sm:text-5xl tracking-wide xl:text-7xl"
        // transition={{ type: "spring", stiffness: 300 }}
      >
        News, Insight, and More
      </motion.h1>
      <p className="hero-info mt-1 text-xl sm:text-2xl font-normal leading-8 sm:mt-4 text-gray-700">
        Learn more about Clerk, our approach to authentication, and company
        news.
      </p>
    </motion.div>
  );
}

export default Hero;
