import React from "react";

function Blogs() {
  const data = [
    {
      img: "../src/assets/image (1).webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
      tags: ["c++", "python", "react"],
    },
    {
      img: "../src/assets/image (2).webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
      tags: ["c++", "python", "react"],
    },
    {
      img: "../src/assets/image.webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
      tags: ["c++", "python", "react"],
    },
  ];

  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem] sm:grid sm:grid-cols-2 gap-4 xl:grid-cols-3 ">
        {data.map((i, index) => (
          <div
            className="cursor-pointer mt-[1rem] mb-[1rem] px-2 py-4"
            key={index}
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
              <div className="mt-3 flex gap-2 items-center">
                {data.map((i, index) => (
                  <p key={index} className="tags text-sm lg:text-[18px] px-4 py-1 lg:py-2 bg-gray-900 rounded-full inline-block text-white cursor-pointer">
                    {i.tags[index]}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
