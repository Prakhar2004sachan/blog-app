import React from "react";

type ButtonAtomProps = {
  label: string;
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "button" | "submit" | "reset";
  color?: string; // Optional with a default value
  className?: string; // For custom styles
  ariaLabel?: string; // Accessibility
};

const ButtonAtom: React.FC<ButtonAtomProps> = ({
  label,
  onClick,
  icon,
  type = "button",
  color = "bg-black", // Default color
  className = "",
  ariaLabel,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={`flex items-center justify-center gap-2 ${color} py-2 px-4 text-white rounded-full w-[7rem] sm:w-[10rem] text-sm ${className}`}
    aria-label={ariaLabel || label}
    title={ariaLabel || label} // Adds tooltip-like functionality
  >
    {icon && <span className="text-2xl">{icon}</span>}
    <span>{label}</span>
  </button>
);

export default ButtonAtom;
