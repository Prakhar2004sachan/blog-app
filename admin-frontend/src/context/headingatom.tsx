import React from "react";

type HeadingAtomProps = {
  text: string;
  className?: string;
};

const HeadingAtom: React.FC<HeadingAtomProps> = ({ text, className }) => (
  <h1
    className={`font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight ${className}`}
  >
    {text}
  </h1>
);

export default HeadingAtom;
