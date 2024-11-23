import React, { useEffect, useRef } from "react";
import {
  FaHatCowboy,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    title: "Post",
    page1: "Docs",
    page2: "Projects",
    page3: "Tutorials",
  },
  {
    title: "Info",
    page1: "Journey",
    page2: "Inspiration",
    page3: "News",
  },
  {
    title: "Trends",
    page1: "Designs",
    page2: "Videos",
    page3: "Discord",
  },
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (footerRef.current) {
      // Ensure the ref is defined
      const elements = footerRef.current.querySelectorAll(".footer-item");
      gsap.from(elements, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <div
      ref={footerRef}
      className="grid grid-cols-1 gap-6 justify-center sm:gap-4 py-[2rem]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-start border-b-2 border-b-gray-300 py-4">
        <div className="mt-5 justify-self-center items-start py-2 footer-item">
          <FaHatCowboy className="cursor-pointer text-4xl" />
        </div>
        <div className="w-full grid grid-cols-2 justify-items-start mt-5 md:justify-items-center md:grid-cols-3 gap-[2rem]">
          {data.map((i, inx) => (
            <div
              key={inx}
              className={`footer-item ${
                i.title == "Info"
                  ? "justify-self-end sm:justify-self-center"
                  : i.title == "Trends"
                  ? "lg:justify-self-end"
                  : "justify-self-start"
              }`}
            >
              <h3 className="font-bold cursor-default">{i.title}</h3>
              <div className={`text-gray-600 flex flex-col py-1`}>
                <Link to="/" className="py-1 hover:text-black">
                  <a href="#">{i.page1}</a>
                </Link>
                <Link to="/" className="py-1 hover:text-black">
                  <a href="#">{i.page2}</a>
                </Link>
                <Link to="/" className="py-1 hover:text-black">
                  <a href="#">{i.page3}</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div></div>
        {/* Socials */}
        <div className="md:mt-8 lg:justify-center lg:text-start lg:flex flex gap-6 font-bold py-5 footer-item flex-col sm:px-4">
          <h3>Social</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center text-xl 2xl:text-2xl">
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <FaFacebookSquare className="cursor-pointer" />
          </div>
        </div>
      </div>
      <p className="text-center mt-3 text-gray-600 footer-item tracking-widest">
        Copyright © 2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
