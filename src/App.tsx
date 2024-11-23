import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
