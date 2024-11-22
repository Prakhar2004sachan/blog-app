import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GoSingleSelect } from "react-icons/go";

function Tags() {
  const tags: string[] = [
    "All Categories",
    "c++",
    "python",
    "javaScript",
    "go",
    "c",
    "c#",
    "node",
    "next",
  ];
  const [click, setClick] = useState(false);
  const [selected, setSelected] = useState("");
  function selectCategories(set: number) {
    setSelected(tags[set]);
    setClick(false);
  }

  return (
    <div className="cursor-pointer flex gap-6 items-center justify-between mt-[2rem] px-4">
      <p
        className={`text-sm sm:text-md py-1 font-medium rounded-full ${
          selected == "" ? "bg-white" : "bg-black text-white px-4"
        }`}
      >
        {selected == "" ? "Select Categories" : `Selected : ${selected}`}
      </p>
      <div className="relative">
        <GoSingleSelect onClick={() => setClick(true)} className={`text-xl}`}/>
        <div
          className={`px-4 py-4 border-2 shadow-lg rounded-lg absolute w-[94vw] bg-white h-[60vh] flex-col top-0 right-[-24px] gap-4 ${
            click ? "flex" : "hidden"
          }`}
        >
          <div className="flex items-center justify-between border-b-2 py-2">
            <p>Select categories</p>
            <RxCross2
              onClick={() => setClick(false)}
              className="text-2xl cursor-pointer bg-gray-300 rounded-full p-1"
            />
          </div>
          <div className="flex gap-6 flex-col overflow-y-scroll">
            {tags.map((i, index) => (
              <p
                onClick={() => {
                  selectCategories(index);
                }}
                className=""
                key={index}
              >
                {i}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Tags;
