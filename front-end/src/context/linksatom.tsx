import React from "react";

type LinksAtomProps = {
  link: string;
};

const LinksAtom: React.FC<LinksAtomProps> = ({ link }) => (
  <a
    href={`#${link}`}
    className="px-4 cursor-pointer py-1 text-md hover:underline transition duration-300"
  >
    {link}
  </a>
);

export default LinksAtom;
