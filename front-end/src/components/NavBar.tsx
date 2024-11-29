import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaHatCowboy } from "react-icons/fa";
import { HiMiniBars4 } from "react-icons/hi2";
import OutsideClickHandler from "react-outside-click-handler";
import { useAuthStore } from "../store/authStore";

function NavBar() {
  const navLinks: string[] = ["Home", "Posts", "About", "Contact"];
  const { isAuthenticated, checkAuth, user, logout } = useAuthStore();

  const routes = (link: string) => {
    const address = link.toLowerCase();
    return address === "home" ? "" : address;
  };
  const [visible, setVisible] = useState(false);

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <div className="2xl:px-[20rem] w-full h-[5rem] bg-zinc-100 px-6 border-b-2 shadow-md flex items-center justify-between">
      <FaHatCowboy className="text-xl cursor-pointer 2xl:text-4xl" />
      <div className="relative">
        {/* Large Devices */}
        <div className="hidden lg:flex gap-10 items-center justify-center rounded-lg">
          {navLinks.map((i, index) => (
            <NavLink
              className={({ isActive }) =>
                `py-2 px-4 rounded-full text-center transition-all duration-300 ${
                  isActive
                    ? "border-2 border-gray-300 shadow-lg"
                    : i === "Login"
                    ? "bg-black text-white w-[10rem]"
                    : "hover:bg-gray-300 hover:text-black"
                }`
              }
              to={routes(i)}
              key={index}
            >
              <p>{i}</p>
            </NavLink>
          ))}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="py-2 px-4 rounded-full text-center transition-all duration-300 bg-black text-white w-[10rem]"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to={"/login"}
              className="py-2 px-4 rounded-full text-center transition-all duration-300 bg-black text-white w-[10rem]"
            >
              Login
            </NavLink>
          )}
        </div>
        {/* Mobile and Medium Devices */}
        <HiMiniBars4
          onClick={() => setVisible(true)}
          className="text-xl cursor-pointer lg:hidden"
        />
        {visible && (
          <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div
              className={`z-10 border-2 absolute gap-2 flex-col w-[94vw] sm:w-[96vw] lg:hidden bg-white right-[-10px] top-0 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
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
                    className={({ isActive }) =>
                      `py-3 rounded-full w-[10rem] text-center hover:text-white transition-all duration-300 ${
                        isActive
                          ? "bg-zinc-400 text-white"
                          : i === "Login"
                          ? "bg-black text-white"
                          : "hover:bg-gray-300 hover:text-black"
                      }`
                    }
                    to={routes(i)}
                    onClick={() => setVisible(false)}
                    key={index}
                  >
                    {i}
                  </NavLink>
                ))}
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="py-2 px-4 rounded-full text-center transition-all duration-300 bg-black text-white w-[10rem]"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setVisible(false)}
                    className="py-2 px-4 rounded-full text-center transition-all duration-300 bg-black text-white w-[10rem]"
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </OutsideClickHandler>
        )}
      </div>
    </div>
  );
}

export default NavBar;
