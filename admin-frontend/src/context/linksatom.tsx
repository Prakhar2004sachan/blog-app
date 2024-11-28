import React from "react";

type LinksAtomProps = {
  link: string;
};

const LinksAtom: React.FC<LinksAtomProps> = ({ link }) => (
  <a href={`#${link}`} className="px-4 cursor-default py-1 text-md hover:underline hover:bg-gray-400 rounded-full transition duration-300">
    {link}
  </a>
);

export default LinksAtom;
