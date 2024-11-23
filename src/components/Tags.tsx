import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoSingleSelect } from "react-icons/go";

function Tags() {
  const tags: string[] = [
    "All Categories",
    "C++",
    "Python",
    "JavaScript",
    "Go",
    "C",
    "C#",
    "Node",
    "Next",
  ];

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All Categories");

  const handleSelectTag = (tag: string) => {
    setSelectedTag(tag);
    setDropdownOpen(false);
  };

  return (
    <div className="cursor-pointer flex gap-6 items-center justify-between mt-8 sm:mt-16 px-4">
      {/* Selected Tag Display */}
      <p
        className={`2xl:hidden text-md sm:text-lg py-1 font-medium rounded-full ${
          selectedTag === "All Categories"
            ? "bg-white"
            : "bg-black text-white px-4"
        }`}
      >
        {selectedTag === "All Categories"
          ? "Select Categories"
          : `Selected: ${selectedTag}`}
      </p>

      {/* Tag Options for Larger Screens */}
      <div className="hidden 2xl:flex items-center gap-4">
        {tags.map((tag, index) => (
          <p
            key={index}
            onClick={() => handleSelectTag(tag)}
            className={`cursor-pointer border-2 shadow-xl text-md py-1 font-medium rounded-full px-4 ${
              selectedTag === tag ? "bg-black text-white" : "bg-white"
            }`}
          >
            {tag}
          </p>
        ))}
      </div>

      {/* Dropdown Menu for Smaller Screens */}
      <div className="relative 2xl:hidden">
        <GoSingleSelect
          aria-label="Open category selector"
          onClick={() => setDropdownOpen(true)}
          className="text-xl"
        />
        {isDropdownOpen && (
          <div className="px-4 py-4 border-2 shadow-lg rounded-lg absolute w-[94vw] sm:w-[98vw] bg-white h-[60vh] flex-col top-0 right-[-24px] sm:right-[-90px] gap-4 overflow-y-auto">
            {/* Dropdown Header */}
            <div className="flex items-center justify-between border-b-2 py-2">
              <p className="font-medium">Select Categories</p>
              <RxCross2
                aria-label="Close category selector"
                onClick={() => setDropdownOpen(false)}
                className="text-2xl cursor-pointer bg-gray-300 rounded-full p-1"
              />
            </div>

            {/* Tag List */}
            <div className="flex flex-col gap-4">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  onClick={() => handleSelectTag(tag)}
                  className={`cursor-pointer text-md font-medium ${
                    selectedTag === tag ? "text-black font-semibold" : ""
                  }`}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tags;
