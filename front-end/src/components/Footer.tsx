import React from "react";
import {
  FaHatCowboy,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaFacebookSquare,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-6 justify-center sm:gap-4 py-[2rem]"
    >
      <motion.div
        variants={fadeUpVariant}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 justify-items-start border-b-2 border-b-gray-300 py-4"
      >
        <div className="mt-5 justify-self-center items-start py-2">
          <FaHatCowboy className="cursor-pointer text-4xl" />
        </div>
        <motion.div
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full grid grid-cols-2 justify-items-start mt-5 md:justify-items-center md:grid-cols-3 gap-[2rem]"
        >
          {data.map((i, inx) => (
            <motion.div
              key={inx}
              variants={fadeUpVariant}
              transition={{ duration: 0.6, delay: 0.2 * inx }}
              className={`${
                i.title === "Info"
                  ? "justify-self-end sm:justify-self-center"
                  : i.title === "Trends"
                  ? "lg:justify-self-end"
                  : "justify-self-start"
              }`}
            >
              <h3 className="font-bold cursor-default">{i.title}</h3>
              <div className="text-gray-600 flex flex-col py-1">
                <Link to="/" className="py-1 hover:text-black">
                  {i.page1}
                </Link>

                <Link to="/" className="py-1 hover:text-black">
                  {i.page1}
                </Link>

                <Link to="/" className="py-1 hover:text-black">
                  {i.page1}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Socials */}
        <motion.div
          variants={fadeUpVariant}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="md:mt-8 lg:justify-center lg:text-start lg:flex flex gap-6 font-bold py-5 flex-col sm:px-4"
        >
          <h3>Social</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center text-xl 2xl:text-2xl">
            <FaInstagram className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
            <FaGithub className="cursor-pointer" />
            <FaFacebookSquare className="cursor-pointer" />
          </div>
        </motion.div>
      </motion.div>
      <motion.p
        variants={fadeUpVariant}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-3 text-gray-600 tracking-widest"
      >
        Copyright © 2024 All rights reserved
      </motion.p>
    </motion.div>
  );
};

export default Footer;
