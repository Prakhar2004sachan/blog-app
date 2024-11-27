import React from "react";
import ImageAtom from "../context/imageatom";
import HeadingAtom from "../context/headingatom";
import parse from "html-react-parser";
import ImgTool from "../components/ImgTool";

type PostContentProps = {
  heading: string;
  shortDescription: string;
  mainImg: string;
  content: string;
};

const PostContent: React.FC<PostContentProps> = ({
  heading,
  shortDescription,
  mainImg,
  content,
}) => (
  <div className="mt-5">
    <HeadingAtom text={heading} />
    <p className="short-description mt-2 text-lg text-gray-600">
      {shortDescription}
    </p>
    <div className="flex w-full justify-center sm:justify-between flex-col sm:flex-row gap-6 my-5">
      <div>
        <ImageAtom
          src={mainImg || "https://via.placeholder.com/150"}
          alt={heading}
        />
        <div className="mt-10 parse">{parse(content)}</div>
      </div>
      <div className="promotions w-full">
        <div>
          <h1>Learnings in the Tutorial</h1>
        </div>
      </div>
    </div>
  </div>
);

export default PostContent;
