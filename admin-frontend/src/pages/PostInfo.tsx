import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaRegEdit } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import parse from "html-react-parser";

type BlogProps = {
  _id: string;
  mainImg: string;
  heading: string;
  tags: string[];
  shortDescription: string;
  date: string;
  content: string;
};

function PostInfo() {
  const { postId } = useParams();
  const [blogPosts, setBlogPosts] = useState<BlogProps[]>([]);
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const navigate = useNavigate();

  // Fetch all blog posts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${backendUrl}api/blog/list-posts`);
        if (res.data.success) {
          setBlogPosts(res.data.posts);
        } else {
          console.error("Error fetching blogs:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  // Find and set the specific blog post
  useEffect(() => {
    const foundBlog = blogPosts.find((post) => post._id === postId) || null;
    setBlog(foundBlog);
  }, [postId, blogPosts]);

  // If no blog is found, show a fallback UI
  if (!blog) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500">Post not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="mt-5 w-full animate-fadeIn">
      {/* Navigation Buttons */}
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate("/all")}
          className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-2 py-2 items-center justify-start cursor-pointer transition duration-300"
        >
          <FaAngleLeft className="text-lg" />
          <p>Back to blog</p>
        </div>
        <div
          onClick={() => navigate(`/edit/${blog._id}`)}
          className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-4 py-2 items-center justify-start cursor-pointer transition duration-300"
        >
          <FaRegEdit className="text-lg" />
          <p>Edit Post</p>
        </div>
      </div>

      {/* Tags Section */}
      <div className="mt-10 flex items-center gap-4">
        <div className="flex gap-2 items-center">
          {blog.tags.map((tag, index) => (
            <p
              key={`tag-${index}`}
              className="px-4 py-1 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition duration-300"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-sm text-gray-400">{blog.date}</p>
      </div>

      {/* Post Content */}
      <div className="mt-5">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          {blog.heading}
        </h1>
        <p className="short-description mt-2 text-lg text-gray-600">
          {blog.shortDescription}
        </p>

        <div className="flex w-full justify-center sm:justify-between flex-col sm:flex-row gap-6 my-5">
          <div className="content w-full">
            <img
              className="rounded-2xl w-full shadow-xl transition duration-300"
              src={blog.mainImg || "https://via.placeholder.com/150"}
              alt={blog.heading}
            />
            {/* Render Blog Content */}
            <div className="mt-10 parsed-html">{parse(blog.content)}</div>
          </div>
          <div className="highlight h-[29rem] sm:w-1/2 lg:px-10 lg:py-6 flex flex-col gap-2 py-3 px-4 border-2 shadow-xl rounded-xl animate-slideIn">
            <h2 className="cursor-default text-xl font-semibold text-gray-600">
              Topics mentioned in the post:
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostInfo;
