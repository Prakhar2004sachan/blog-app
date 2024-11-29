import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { backendUrl } from "../App";
import parse from "html-react-parser";
import "./about.css"

type AboutData = {
  heading: string;
  content: string;
};

function About() {
  const [about, setAbout] = useState<AboutData | null>(); // Define type and initial state

  const fetchAbout = async () => {
    try {
      const res = await axios.get(`${backendUrl}api/about/get-about`);
      if (res.data?.aboutData?.length) {
        setAbout(res.data.aboutData[0]); // Set about data
      }
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []); // Fetch about data once on component mount

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 w-full text-center"
    >
      {/* Title */}
      {about && (
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="sm:text-5xl text-3xl font-bold"
        >
          {about.heading}
        </motion.h1>
      )}

      {/* Content */}
      {about?.content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-6 w-full parsed-about-html text-lg py-2 leading-8"
        >
          {parse(about.content)}
        </motion.div>
      )}
    </motion.div>
  );
}

export default About;
