import React from "react";

type ImageAtomProps = {
  src: string;
  alt: string;
  className?: string;
};

const ImageAtom: React.FC<ImageAtomProps> = ({ src, alt, className }) => (
  <img
    className={`rounded-2xl shadow-xl transition duration-300 ${className}`}
    src={src}
    alt={alt}
  />
);

export default ImageAtom;
