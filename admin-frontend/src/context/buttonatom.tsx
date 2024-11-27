import React from "react";

type ButtonAtomProps = {
  label: string;
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "button" | "submit" | "reset";
};

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  label,
  onClick,
  icon,
  type = "button",
}) => (
  <div className="bg-black py-2 text-white flex items-center justify-center px-4 rounded-full">
    {icon && <span className="mr-2 text-2xl">{icon}</span>}
    <button
      type={type}
      onClick={onClick}
      className=" text-white text-center"
    >
      {label}
    </button>
  </div>
);

export default ButtonAtom;
