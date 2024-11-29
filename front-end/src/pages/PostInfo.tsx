import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import NavigationButtons from "../context/navigatingButtons";
import PostContent from "../context/postcontent";
import TagsSection from "../context/tagsSection";
import { useAuthStore } from "../store/authStore";

type BlogProps = {
  _id: string;
  mainImg: string;
  heading: string;
  tags: string[];
  links: string[];
  shortDescription: string;
  date: string;
  content: string;
};

function PostInfo() {
  const { postId } = useParams(); // Get postId from URL
  console.log(postId);
  const [blog, setBlog] = useState<BlogProps | null>(null);

  const { isAuthenticated, checkAuth, user, logout } = useAuthStore();

  const navigate = useNavigate();

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/blog/list-posts`);
      console.log(res);
      if (res.data.success) {
        const post = res.data.posts.find((p: BlogProps) => p._id === postId);
        console.log(post);
        setBlog(post || null);
      } else {
        console.error("Error fetching blog:", res.data.message);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    fetchBlog();
    checkAuth();
  }, [postId]);
  console.log(blog);

  if (!isAuthenticated) {
    navigate("/signup");
  }

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
    <div className="mt-10 w-full animate-fadeIn">
      <NavigationButtons navigateBack={() => navigate("/posts")} />
      <TagsSection tags={blog.tags} date={blog.date} />
      <PostContent
        heading={blog.heading}
        shortDescription={blog.shortDescription}
        mainImg={blog.mainImg}
        content={blog.content}
        links={blog.links}
      />
    </div>
  );
}

export default PostInfo;
