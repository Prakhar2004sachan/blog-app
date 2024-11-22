import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Posts from "./pages/Posts"


function App() {

  return (
    <div className="">
    <NavBar/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  )
}

export default App
