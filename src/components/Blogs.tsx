import React from "react";

function Blogs() {
  const data = [
    {
      img: "../src/assets/image (1).webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    },
    {
      img: "../src/assets/image (2).webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    },
    {
      img: "../src/assets/image.webp", // Use require for local assets
      title: "Clerk launches EASIE SSO and eliminates SSO fees",
      info: "EASIE SSO brings Clerk's signature simplicity to a notoriously agonizing corner of authentication.",
    },
  ];

  return (
    <div className="my-[2rem]">
      <div className="mt-[2rem] mb-[2rem]">
        {data.map((i, index) => (
          <div className="mt-[1rem] mb-[1rem] px-2 py-4" key={index}>
            <img src={i.img} alt={`blog-${index}`} className="rounded-2xl" />
            <div className="mt-6 px-2 flex flex-col">
              <p className="text-base text-gray-500">Nov 20, 2024</p>
              <h2 className="blog-h2 text-pretty text-xl mt-3 text-gray-900">
                {i.title}
              </h2>
              <p className="mt-2 text-sm text-gray-700">{i.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
