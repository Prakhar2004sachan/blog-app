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
    title: "Latest Post",
    page1: "Documentation",
    page2: "Projects",
    page3: "Tutorials",
  },
  {
    title: "Latest Info",
    page1: "Follow my Journey",
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
  const footerRef: any = useRef();

  useEffect(() => {
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
  }, []);

  return (
    <div
      ref={footerRef}
      className="grid grid-cols-1 gap-6 justify-center sm:gap-4 py-[2rem]"
    >
      <div className="justify-self-center items-start py-2 footer-item">
        <FaHatCowboy className="cursor-pointer text-4xl" />
      </div>
      <div className="grid grid-cols-2 mt-5 justify-items-start md:justify-items-center md:grid-cols-3 gap-6">
        {data.map((i, inx) => (
          <div key={inx} className="footer-item">
            <h3 className="font-bold cursor-default">{i.title}</h3>
            <div className="text-gray-600 flex flex-col px-2 py-1">
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
      <div className="text-center sm:justify-start lg:justify-center lg:text-start lg:flex flex items-center gap-10 font-bold border-b-2 py-5 border-b-gray-300 footer-item">
        <h3>Social</h3>
        <div className="flex gap-4 items-center text-xl 2xl:text-2xl">
          <FaInstagram className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaLinkedin className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
          <FaFacebookSquare className="cursor-pointer" />
        </div>
      </div>
      <p className="text-center text-gray-600 footer-item">
        Copyright © 2024 All rights reserved
      </p>
    </div>
  );
};

export default Footer;
