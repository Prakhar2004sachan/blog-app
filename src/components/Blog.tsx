import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type BlogProps = {
  id: string; // Corrected typing
};

function Blog({id}:BlogProps) {
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <motion.div
        className="cursor-pointer mt-[1rem] mb-[1rem] px-2 py-4 bg-white rounded-2xl transform hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 1 * 0.1 }}
      >
        <img src="../src/assets/image.webp" className="rounded-2xl" />
        <div className="mt-6 px-2 flex flex-col">
          <p className="text-base text-gray-500">Nov 20, 2024</p>
          <h2 className="blog-h2 text-pretty text-xl mt-3 text-gray-900 leading-8">
            Test Title
          </h2>
          <p className="mt-2 lg:mt-4 text-sm sm:text-[14px] leading-6 text-gray-700">
           Test info
          </p>
          {/* dump code */}
        </div>
      </motion.div>
    </Link>
  );
}

export default Blog;
