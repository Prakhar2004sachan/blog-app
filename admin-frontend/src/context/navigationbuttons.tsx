import React from "react";
import ButtonAtom from "../context/buttonatom";
import { FaAngleLeft, FaRegEdit } from "react-icons/fa";

type NavigationButtonsProps = {
  navigateBack: () => void;
  navigateEdit: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  navigateBack,
  navigateEdit,
}) => (
  <div className="flex items-center justify-between">
    <ButtonAtom
      label="Back to blog"
      onClick={navigateBack}
      icon={<FaAngleLeft />}
      className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-2 py-2 items-center justify-start cursor-pointer"
    />
    <ButtonAtom
      label="Edit Post"
      onClick={navigateEdit}
      icon={<FaRegEdit />}
      className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-4 py-2 items-center justify-start cursor-pointer"
    />
  </div>
);

export default NavigationButtons;
