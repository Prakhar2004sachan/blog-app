import React from "react";
import { Link } from "react-router-dom";
import imgSrc from "../assets/download.jpeg";

function Home() {
  return (
    <div className="mt-10">
      <div className="flex gap-10">
        <Link
          to="/editor"
          className="w-full h-[10rem] cursor-pointer bg-green-500 hover:bg-green-700 transition-all duration-300 px-4 py-6 rounded-2xl text-white"
        >
          <h2 className="text-2xl font-bold">Dynamic Editor</h2>
        </Link>
        <Link
          to="/write"
          className="w-full cursor-pointer bg-red-500 px-4 py-6 rounded-2xl text-white hover:bg-red-700 transition-all duration-300"
        >
          <h2 className="text-2xl font-bold">Fast Editor</h2>
        </Link>
      </div>
      <div className="flex mt-5 w-full gap-10">
        {/* left */}
        <div className="flex gap-5">
          <div className="flex flex-col gap-5">
            <Link
              to="/all"
              className="w-full h-[10rem] cursor-pointer bg-blue-500 hover:bg-blue-700 transition-all duration-300 px-4 py-6 rounded-2xl text-white"
            >
              <h2 className="text-2xl font-bold">All Post</h2>
            </Link>
            <Link
              to="/about"
              className="w-full  cursor-pointer bg-yellow-500 px-4 py-6 rounded-2xl text-white hover:bg-yellow-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold">Edit About Page</h2>
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <Link
              to="/img-tool"
              className="w-full cursor-pointer bg-green-500 hover:bg-green-700 transition-all duration-300 px-4 py-6 rounded-2xl text-white"
            >
              <h2 className="text-2xl font-bold">Image Tool</h2>
            </Link>
            <Link
              to="/uploded-images"
              className="w-full h-[10rem] cursor-pointer bg-red-500 px-4 py-6 rounded-2xl text-white hover:bg-red-700 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold">All Uploaded images</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
