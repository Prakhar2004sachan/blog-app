import React from "react";
import { motion } from "framer-motion";

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

function Blogs({ count }: { count: number }) {
  return <BlogPosts count={count} />;
}

function BlogPosts({ count }: { count: number }) {
  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3 ">
        {data.slice(0, count).map((i, index) => (
          <motion.div
            className="cursor-pointer mt-[1rem] mb-[1rem] px-2 py-4 bg-white rounded-2xl transform hover:scale-105 transition-all duration-300"
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img src={i.img} alt={`blog-${index}`} className="rounded-2xl" />
            <div className="mt-6 px-2 flex flex-col">
              <p className="text-base text-gray-500">Nov 20, 2024</p>
              <h2 className="blog-h2 text-pretty text-xl mt-3 text-gray-900 leading-8">
                {i.title}
              </h2>
              <p className="mt-2 lg:mt-4 text-sm sm:text-[14px] leading-6 text-gray-700">
                {i.info}
              </p>
              {/* dump code */}
            </div>
          </motion.div>
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
