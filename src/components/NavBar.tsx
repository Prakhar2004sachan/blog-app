import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaHatCowboy } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function NavBar() {
  const navLinks: string[] = ["Home", "Posts", "About", "Contact", "Login"];
  const routes = (link: string) => {
    let address = link.toLowerCase();
    if (address == "home") {
      return (address = "");
    } else {
      return address;
    }
  };
  const [visible, setVisible] = useState(false);

  return (
    <div className="w-full h-[5rem] bg-zinc-100 px-6 border-b-2 shadow-md flex items-center justify-between">
      <FaHatCowboy className="text-xl cursor-pointer" />
      <div className="relative">
        <FaBars
          onClick={() => setVisible(true)}
          className="text-xl cursor-pointer"
        />
        <div
          className={`border-2 absolute gap-2 flex-col w-[94vw] sm:w-[98vw] bg-white right-[-10px] top-0 ${
            visible ? "flex" : "hidden"
          } transition-all duration-500`}
        >
          <div className="flex justify-between items-center px-4 py-2">
            <FaHatCowboy className="text-xl cursor-pointer" />
            <RxCross2
              onClick={() => setVisible(false)}
              className="text-2xl cursor-pointer bg-gray-300 rounded-full p-1"
            />
          </div>
          <div className="py-10 pt-10 flex flex-col gap-4 items-center justify-center shadow-xl rounded-lg">
            {navLinks.map((i, index) => (
              <NavLink
                className={`py-3 rounded-full w-[10rem] text-center hover:text-white transition-all duration-300 ${
                  i == "Login"
                    ? "bg-black text-white"
                    : "hover:bg-gray-300 hover:text-black"
                }`}
                to={routes(i)}
                onClick={() => setVisible(false)}
                key={index}
              >
                {i}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
