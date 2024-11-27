import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { blogPostsAtom } from "../context/atom";
import { useParams, useNavigate } from "react-router-dom";

type BlogProps = {
  id: string;
  mainImg: string;
  title: string;
  tags: string[];
  shortDescription: string;
  date: string;
  expand?: {
    topic: string;
    shortDescription: string;
    img: string[];
    details: string;
  }[];
};

function PostInfo() {
  const { postId } = useParams();
  const blogPosts: BlogProps[] = useRecoilValue(blogPostsAtom);
  const [blog, setBlog] = useState<BlogProps | null>(null); // Initialize as null
  const navigate = useNavigate();

  useEffect(() => {
    const foundBlog = blogPosts.find((i) => i.id === postId);
    setBlog(foundBlog || null); // Set null if not found
  }, [postId, blogPosts]);

  if (!blog) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500">Post not found.</p>
        <button
          onClick={() => navigate("/posts")}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Go Back
        </button>
      </div>
    );
  }

  // const imgUrl = (imgArr: string[] | null | undefined): string => {
  //   return imgArr?.[0] || "https://via.placeholder.com/150"; // Fallback image
  // };

  const idTag = (id: string): string => id.split(" ").join("-");

  return (
    <div className="mt-5 w-full animate-fadeIn">
      {/* Back to Blog */}
      <div
        onClick={() => navigate("/posts")}
        className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-2 py-2 items-center justify-start cursor-pointer transition duration-300"
      >
        <FaAngleLeft className="text-lg" />
        <p>Back to blog</p>
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
        {/* Title and Short Description */}
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          {blog.title}
        </h1>
        <p className="short-description mt-2 text-lg text-gray-600">
          {blog.shortDescription}
        </p>

        {/* Image and Highlights */}
        <div className="flex w-full justify-center sm:justify-between flex-col sm:flex-row gap-6 sm:gap-10 my-5">
          <img
            className="rounded-2xl w-full shadow-md hover:scale-105 transition duration-300"
            src={blog.mainImg || "https://via.placeholder.com/150"}
            alt={blog.title}
          />
          <div className="highlight sm:w-1/2 lg:w-[30rem] lg:px-10 lg:py-6 flex flex-col gap-2 py-3 px-4 border-2 shadow-xl rounded-xl animate-slideIn">
            <h2 className="cursor-default text-xl font-semibold text-gray-600">
              Topics mentioned in the post:
            </h2>
            <div>
              {blog.expand?.map((item, index) => (
                <a
                  key={`highlight-${index}`}
                  href={`#${idTag(item.topic)}`}
                  className="text-gray-500 hover:text-black hover:underline"
                >
                  <p className="topics text-lg font-medium py-1">
                    {item.topic}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Full Details */}
        {blog.expand?.map((item, index) => (
          <div key={`description-${index}`} className="animate-fadeInSlow">
            <h3 id={idTag(item.topic)} className="text-2xl mt-8 font-bold">
              {item.topic}
            </h3>
            <div className="flex sm:flex-row flex-col gap-10 items-center my-5">
              {item.img.map((img, imgIndex) => (
                <img
                  key={`img-${index}-${imgIndex}`}
                  className="rounded-2xl w-full sm:w-1/2 shadow-md hover:scale-105 transition duration-300"
                  src={img}
                  alt={`${item.topic} visual`}
                />
              ))}
            </div>
            <p className="content mt-2 text-lg text-gray-600 leading-7">
              {item.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostInfo;
