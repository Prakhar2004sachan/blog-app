import React from "react";

import { FaAngleLeft } from "react-icons/fa";
import ButtonAtom from "./buttonAtom";

type NavigationButtonsProps = {
  navigateBack: () => void;
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  navigateBack,

}) => (
  <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between">
    <ButtonAtom
      label="Back to blog"
      color="bg-black"
      onClick={navigateBack}
      icon={<FaAngleLeft />}
      className="bg-gray-200 text-xs w-[10rem] hover:bg-gray-300 rounded-lg flex gap-2 pl-2 py-2 items-center justify-start cursor-pointer"
    />
  </div>
);

export default NavigationButtons;
