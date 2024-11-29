import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { backendUrl } from "../App";
import axios from "axios";
import Pagination from "./Pagination";

// Define the structure of a blog post
type BlogPost = {
  _id: string;
  mainImg: string;
  heading: string;
  shortDescription: string;
  date: string;
  tags?: string[]; // Optional tags array
};

const Blogs = () => {
  const [listPosts, setListPosts] = useState<BlogPost[]>([]); // Posts data from the backend
  const [search, setSearch] = useState<string>(""); // Search query state
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]); // Filtered posts based on search query

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;

  // Calculate indices for paginated posts
  const lastPageIndex = currentPage * postPerPage;
  const firstPostIndex = lastPageIndex - postPerPage;

  // Fetch the blog posts from the backend
  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/blog/list-posts`);
      setListPosts(res.data.posts); // Store posts in the state
      setFilteredPosts(res.data.posts); // Set filtered posts initially to all posts
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filtered = listPosts.filter(
      (post) =>
        post.heading.toLowerCase().includes(query) ||
        post.shortDescription.toLowerCase().includes(query) ||
        (post.tags || []).some((tag) => tag.toLowerCase().includes(query)) // Safely access tags
    );
    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Effect to fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Get posts to display based on pagination
  const currentPosts = filteredPosts.slice(firstPostIndex, lastPageIndex);

  return (
    <div className="my-[2rem] w-full">
      {/* Search Bar */}
      <div className="flex w-full gap-4 mb-6 px-4 border-2 border-black rounded-full">
        <input
          type="text"
          className="h-10 px-4 py-2 rounded-full outline-none"
          placeholder="Search for posts..."
          value={search}
          onChange={handleSearch} // Handle search input
        />
      </div>

      {/* Displaying posts */}
      <div className="mt-[2rem] w-full mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <Blog
              key={post._id}
              id={post._id}
              date={new Date(post.date).toDateString()}
              title={post.heading}
              mainImg={post.mainImg}
              shortDescription={post.shortDescription}
            />
          ))
        ) : (
          <p className="text-xl font-medium">No blog posts available</p>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        totalPosts={filteredPosts.length} // Pagination should consider filtered posts
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage = {currentPage}
      />
    </div>
  );
};

export default Blogs;
