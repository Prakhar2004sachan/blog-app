import React from "react";

type TagAtomProps = {
  text: string;
};

const TagAtom: React.FC<TagAtomProps> = ({ text }) => (
  <p className="px-4 cursor-default py-1 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition duration-300">
    {text}
  </p>
);

export default TagAtom;
