import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
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
  const [click, setClick] = useState(false);

  return (
    <div className="flex items-center justify-center py-6">
       {/* Light */}
       <div className="lightness"></div>
       <div className="lightness"></div>
      <div className="w-full lg:w-auto lg:min-w-[730px] px-4 py-2 lg:px-4 lg:py-3 rounded-[45px] flex justify-between bg-zinc-100 items-center shadow-sm drop-shadow-[0_0px_10px_rgba(0,0,0,.15)]">
       
        {/* Logo */}
        <div className="cursor-pointer logo font-medium px-2 text-3xl lg:text-4xl"><FaHatCowboy /></div>
        {/* Nav Links */}
        <div className="hidden lg:flex nav-links gap-4 items-center">
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              to={routes(item)}
              className="text-sm cursor-pointer flex items-center px-4 p-2 rounded-full hover:bg-gray-300 transition-all duration-300"
            >
              <p>{item}</p>
              {/* <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/> */}
            </NavLink>
          ))}
        </div>
       

        {/* Button */}
        <div className="flex gap-1 sm:gap-4 items-center relative">
          <div className="text-[12px] lg:text-sm cursor-pointer flex gap-2 items-center px-3 p-1 sm:px-4 sm:p-2 rounded-[40px] bg-gradient-to-t from-black to-zinc-500 text-white hover:opacity-80 transition-all duration-300 ease-in">
            <p>Join Now</p> <FaAngleRight />
          </div>
          {/* Icons */}
          {click? <GiCrossedSabres onClick={()=>setClick(!click)} className="w-12 text-2xl lg:hidden"/> : <IoAppsOutline onClick={()=>setClick(!click)} className="w-12 text-2xl lg:hidden" />}
             {/* Nav-link mobile */}
        <div className={`lg:hidden mobile gap-6 flex-col px-4 py-3 text-[12px] absolute top-10 sm:top-12 bg-white min-w-[18rem] sm:w-auto right-0 rounded-lg ${click ? "flex ": "hidden"} transition-all duration-300`}>
          {navLinks.map((item, index) => (
            <NavLink
              key={index}
              onClick={()=>setClick(false)}
              to={routes(item)}
              className="text-sm text-center cursor-pointer block px-4 p-2 rounded-full hover:bg-gray-300 transition-all duration-300"
            >
              <p>{item}</p>
            </NavLink>
          ))}
        </div>
        </div>
        
      </div>  
    </div>
  );
}

export default NavBar;
