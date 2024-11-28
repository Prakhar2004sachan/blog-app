import React from "react";
import ImageAtom from "../context/imageatom";
import HeadingAtom from "../context/headingatom";
import parse from "html-react-parser";
import LinksAtom from "./linksatom";

type PostContentProps = {
  heading: string;
  shortDescription: string;
  mainImg: string;
  links: string[];
  content: string;
};

const PostContent: React.FC<PostContentProps> = ({
  heading,
  shortDescription,
  mainImg,
  links,
  content,
}) => (
  <div className="mt-5">
    <HeadingAtom text={heading} />
    <p className="short-description mt-2 text-lg text-gray-600">
      {shortDescription}
    </p>
    <div className="flex w-full flex-col lg:flex-row justify-center sm:justify-between sm:flex-row gap-6 my-5">
      <div className="flex flex-col gap-10 w-full">
        <ImageAtom
          src={mainImg || "https://via.placeholder.com/150"}
          alt={heading}
        />
        <div className="my-5 bg-gray-200 py-10 px-4 rounded-2xl">
          <h1 className="text-2xl font-bold underline">Content of the blog</h1>
          <div className="flex mt-3 flex-col gap-4 px-6 py-2">
            {links.map((i, inx) => (
              <div className="flex gap-6 items-center justify-start">
                <div className="bg-black w-2 h-2 rounded-full"></div>
                <LinksAtom link={i} key={inx} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 parse">{parse(content)}</div>
      </div>
      <div className="promotions w-[25rem]">
        <div className="my-5">
          <h1 className="text-2xl font-bold">Promotions</h1>
        </div>
      </div>
    </div>
  </div>
);

export default PostContent;
