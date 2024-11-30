import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PostInfo from "./pages/PostInfo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerification from "./pages/EmailVerification";
import Signup from "./pages/SignUp";
import { useAuthStore } from "./store/authStore";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

// Redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <div>
      <NavBar />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick
        theme="light"
        rtl={false}
      />

      <div className="flex justify-center px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <Signup />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/verify-email"
            element={
              <RedirectAuthenticatedUser>
                <EmailVerification />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <ProtectedRoute>
                <PostInfo />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <div className="px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
