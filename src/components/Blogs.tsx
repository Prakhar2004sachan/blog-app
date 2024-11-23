import React from "react";
import { motion } from "framer-motion";
import Blog from "./Blog";

const data = [
  {
    img: "../src/assets/image (1).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image (2).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react","i"],
  },
  {
    img: "../src/assets/image (1).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image (2).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react","i"],
  },
  {
    img: "../src/assets/image (1).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image (2).webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react"],
  },
  {
    img: "../src/assets/image.webp", // Use require for local assets
    title: "Clerk launches EASIE SSO and eliminates SSO fees",
    info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    // tags: ["c++", "python", "react","i"],
  },
];

function Blogs() {
  return <BlogPosts />;
}

function BlogPosts() {
  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3 ">
        {[...Array(6)].map((i,index)=>(
          <Blog id={`${index}+afld`}/>
        ))}
      </div>
    </div>
  );
}

// Dump code
{
  /* <div className="mt-3 flex gap-2 items-center">
                {data.map((i, index) => (
                  <p key={index} className="tags text-sm lg:text-[18px] px-4 py-1 lg:py-2 bg-gray-900 rounded-full inline-block text-white cursor-pointer">
                    {i.tags[index]}
                  </p>
                ))}
              </div> */
}

export default Blogs;
