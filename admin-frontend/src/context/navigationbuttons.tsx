import React from "react";
import ButtonAtom from "../context/buttonatom";
import { FaAngleLeft, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type NavigationButtonsProps = {
  navigateBack: () => void;
  navigateEdit: () => void;
  deletePost: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  navigateBack,
  navigateEdit,
  deletePost,
}) => (
  <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
    <ButtonAtom
      label="Back to blog"
      color="bg-black"
      onClick={navigateBack}
      icon={<FaAngleLeft />}
      className="bg-gray-500 text-xs w-[10rem] hover:bg-gray-900 rounded-lg flex gap-2 pl-2 py-2 items-center transition-all duration-500 justify-start cursor-pointer"
    />
    <ButtonAtom
      color="bg-red-600"
      label="Delete Post"
      onClick={deletePost} // Function executed on click
      icon={<MdDelete />}
      className="bg-red-300 text-xs w-[10rem] hover:bg-red-700 rounded-lg flex gap-2 pl-2 py-2 items-center transition-all duration-500 justify-start cursor-pointer"
    />
    <ButtonAtom
      color="bg-black"
      label="Edit Post"
      onClick={navigateEdit}
      icon={<FaRegEdit />}
      className="bg-gray-500 text-xs w-[10rem] hover:bg-gray-900 rounded-lg flex gap-2 pl-4 py-2 items-center transition-all duration-500 justify-start cursor-pointer"
    />
  </div>
);

export default NavigationButtons;
