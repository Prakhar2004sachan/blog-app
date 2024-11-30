import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import NavigationButtons from "../context/navigationbuttons";
import TagsSection from "../context/tagssection";
import PostContent from "../context/postcontent";
import { toast } from "sonner";

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
  const [blog, setBlog] = useState<BlogProps | null>(null);
  const navigate = useNavigate();

  const removePost = async (postId: string) => {
    try {
      const res = await axios.post(`${backendUrl}api/blog/remove`, { postId });
      if (res.data.success) {
        toast.success("Post Deleted");
        navigate("/all"); // Navigate back to the post list
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the post.");
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${backendUrl}api/blog/list-posts`);
        if (res.data.success) {
          const post = res.data.posts.find((p: BlogProps) => p._id === postId);
          setBlog(post || null);
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
        <p className="text-gray-900">Post not found.</p>
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
        deletePost={() => removePost(blog._id)} // Pass function reference correctly
      />
      <TagsSection tags={blog.tags} date={blog.date} />
      <PostContent
        heading={blog.heading}
        shortDescription={blog.shortDescription}
        mainImg={blog.mainImg}
        content={blog.content}
        links= {blog.links}
      />
    </div>
  );
}

export default PostInfo;
