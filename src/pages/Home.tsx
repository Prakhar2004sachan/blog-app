import React from "react";
import Hero from "../components/Hero";
import Tags from "../components/Tags";
import Blogs from "../components/Blogs";
import Blog from "../components/Blog";

function Home() {
  return (
    <div>
      <Hero />
      <Tags />
      <Blogs/>
      {/* <Blog id={"1lfdjas"}/> */}
    </div>
  );
}

export default Home;
