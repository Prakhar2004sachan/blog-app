import React from "react";
import { FaHatCowboy } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="grid grid-cols-1 gap-6 justify-center sm:gap-4 py-[2rem]">
      <div className="justify-self-center items-start py-2">
        <FaHatCowboy className="cursor-pointer text-4xl" />
      </div>
      {/* Footer Menu */}
      <div className="grid grid-cols-2 mt-5 justify-items-start md:justify-items-center md:grid-cols-3 gap-6">
        {/* 1 */}
        <div className="md:justify-self-start">
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
        {/* 2 */}
        <div className="justify-self-end md:justify-self-center">
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="md:justify-self-end">
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
        {/* 4 */}
        <div className="justify-self-end md:justify-self-start">
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
        {/* 5 */}
        <div>
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
        {/* 6 */}
        <div className="justify-self-end md:justify-self-end">
          <h3 className="font-bold cursor-default">Latest Post</h3>
          <ul className="text-gray-600 px-2 py-1 ">
            <li className="py-1 hover:text-black">
              <a href="#">Documentaiton</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">Python</a>
            </li>
            <li className="py-1 hover:text-black">
              <a href="#">c++</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Socials */}
      <div className="text-center lg:text-start lg:flex flex items-center gap-10 font-bold border-b-2 py-5 border-b-gray-300">
        <h3>Social</h3>
        <div className="flex lg:justify-center gap-4 items-center text-xl 2xl:text-2xl justify-evenly lg:mt-0">
          <FaInstagram className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaFacebookSquare className="cursor-pointer" />
        </div>
      </div>
      {/* Copyright */}
      <p className="text-center text-gray-600">
        Copyright © 2024 All right reserved
      </p>
    </div>
  );
}

export default Footer;
