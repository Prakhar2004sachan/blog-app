import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-10 text-center"
    >
      {/* Title */}
      <motion.h1
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="sm:text-5xl text-3xl font-bold"
      >
        About Me
      </motion.h1>

      {/* Introduction */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-6 text-lg py-2 leading-8"
      >
        Welcome to my corner of the internet! 👨‍💻 I’m a passionate programmer on
        a never-ending journey to explore, learn, and create. This blog is my
        digital diary, where I share my daily adventures in the world of
        coding—everything from breakthrough moments to frustrating bugs and the
        lessons I pick up along the way.
      </motion.p>

      {/* Why This Blog */}
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 font-bold sm:text-4xl text-2xl"
      >
        Why This Blog?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-3 text-lg py-2 leading-8"
      >
        Programming is more than just writing code; it’s about solving problems,
        building something meaningful, and growing every day. I started this
        blog to document my journey and to share it with like-minded
        individuals. Whether you’re just starting out, a seasoned developer, or
        simply curious about the world of programming, you’ll find stories,
        tips, and insights that (I hope) will inspire or help you.
      </motion.p>

      {/* What Can You Expect */}
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 font-bold sm:text-4xl text-2xl"
      >
        What Can You Expect?
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="about mt-3 text-lg py-2 leading-8"
      >
        <li>
          <b>Daily Updates:</b> Raw, honest reflections of my day-to-day coding
          life.
        </li>
        <li>
          <b>Code Snippets:</b> Solutions I’ve discovered, techniques I’ve
          learned, and ideas I’m exploring.
        </li>
        <li>
          <b>Project Highlights:</b> Sneak peeks into the projects I’m working
          on and the challenges I face.
        </li>
        <li>
          <b>Lessons Learned:</b> The wins, the losses, and everything in
          between.
        </li>
        <li>
          <b>Community:</b> A space to connect with fellow developers and
          exchange ideas.
        </li>
      </motion.ul>

      {/* About Me */}
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-6 font-bold sm:text-4xl text-2xl"
      >
        A Little About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mt-3 text-lg py-2 leading-8"
      >
        I’m someone who thrives on curiosity and the thrill of problem-solving.
        From my first "Hello, World!" to complex algorithms and frameworks,
        coding has been my constant companion. Outside of programming, you might
        find me diving into tech news, gaming, or exploring creative hobbies.
        Thank you for stopping by! I hope my journey resonates with you in some
        way or inspires you to embark on (or continue) your own programming
        path. Feel free to drop a comment, share your thoughts, or connect with
        me—I’d love to hear from you! 🚀 — <i>Prakhar</i>
      </motion.p>
    </motion.div>
  );
}

export default About;
