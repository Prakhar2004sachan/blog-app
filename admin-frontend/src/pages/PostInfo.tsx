import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import NavigationButtons from "../context/navigationbuttons";
import TagsSection from "../context/tagssection";
import PostContent from "../context/postcontent";

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
  const { postId } = useParams(); // Get postId from URL
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${backendUrl}api/blog/list-posts`);
        if (res.data.success) {
          // Find the blog matching the postId
          const post = res.data.posts.find((p: BlogProps) => p._id === postId);
          setBlog(post || null); // Set post or null if not found
        } else {
          console.error("Error fetching blog:", res.data.message);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [postId]);

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
      <NavigationButtons
        navigateBack={() => navigate("/all")}
        navigateEdit={() => navigate(`/edit/${blog._id}`)}
      />
      <TagsSection tags={blog.tags} date={blog.date} />
      <PostContent
        heading={blog.heading}
        shortDescription={blog.shortDescription}
        mainImg={blog.mainImg}
        content={blog.content}
      />
    </div>
  );
}

export default PostInfo;
