import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PostInfo from "./pages/PostInfo";
import { ToastContainer, toast } from "react-toastify";
import EmailVerification from "./pages/EmailVerification";
import Signup from "./pages/SignUp";
import { useAuthStore } from "./store/authStore";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("isauthenticated", isAuthenticated);
  console.log("user", user);
  return (
    <div>
      <NavBar />

      <ToastContainer position="bottom-right" autoClose={3000} />
      <div className="flex justify-center px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/posts/:postId" element={<PostInfo />} />
        </Routes>
      </div>
      <div className="px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
