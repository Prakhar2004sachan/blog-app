import React from "react";

type ButtonAtomProps = {
  label: string;
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "button" | "submit" | "reset";
  color: string;
};

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  label,
  onClick,
  icon,
  color,
  type = "button",
}) => (
  <div
    className={`${color} py-2 text-white flex items-center justify-start px-4 rounded-full w-[10rem]`}
  >
    {icon && <span className="mr-2 text-2xl">{icon}</span>}
    <button
      type={type}
      onClick={onClick}
      className=" text-white text-center text-sm"
    >
      {label}
    </button>
  </div>
);

export default ButtonAtom;
