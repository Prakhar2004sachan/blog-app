import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaHatCowboy } from "react-icons/fa";
import { GiCrossedSabres } from "react-icons/gi";
import { IoAppsOutline } from "react-icons/io5";

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
    <div className="w-full h-[3rem] bg-zinc-100 px-6 py-3 border-b-2 shadow-md">
      <div className="flex items-center justify-between">
        <FaHatCowboy className="text-xl cursor-pointer" />
        <div className="relative">
          <IoAppsOutline
            onClick={() => setVisible(true)}
            className="text-xl cursor-pointer"
          />
          <div
            className={`absolute gap-2 flex-col w-[92vw] bg-white right-[-10px] top-0 ${
              visible ? "flex" : "hidden"
            }`}
          >
            <div className="place-items-end px-4 py-2">
              <RxCross2 onClick={() => setVisible(false)} className="text-xl" />
            </div>
            <div className="py-5 pt-10 flex flex-col gap-4items-center justify-center gap-4 shadow-xl rounded-lg">
              {navLinks.map((i, index) => (
                <NavLink
                  className="py-3 hover:bg-gray-500 rounded-full w-full text-center hover:text-white transition-all duration-300"
                  to={routes(i)}
                  key={index}
                >
                  {i}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
