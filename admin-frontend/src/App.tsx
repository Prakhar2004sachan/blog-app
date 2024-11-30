import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import NavBar from "./components/NavBar";
import WritePost from "./pages/WritePost";
import EditAbout from "./pages/EditAbout";
import Login from "./pages/Login";
import ChatComponent from "./pages/ChatComponent";
import Posts from "./pages/Posts";
import PostInfo from "./pages/PostInfo";
import Footer from "./components/Footer";
import WritePostJ from "./pages/WritePostJ";
import ImgTool from "./components/ImgTool";
import AllImages from "./pages/AllImages";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditPost from "./pages/EditPost";
import { useAuthStore } from "./pages/authStore";

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

// Protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  // const [scroll, setScroll]= useState();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
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
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/all"
            element={
              <ProtectedRoute>
                <Posts />
              </ProtectedRoute>
            }
          />
          <Route path="/:postId" element={<PostInfo />} />
          <Route
            path="/write"
            element={
              <ProtectedRoute>
                <WritePost />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <EditAbout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectAuthenticatedUser>
                <Login />
              </RedirectAuthenticatedUser>
            }
          />
          <Route path="/chat" element={<ChatComponent />} />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <WritePostJ />
              </ProtectedRoute>
            }
          />
          <Route
            path="/img-tool"
            element={
              <ProtectedRoute>
                <ImgTool />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit/:postId"
            element={
              <ProtectedRoute>
                <EditPost />
              </ProtectedRoute>
            }
          />
          <Route path="/uploded-images" element={<AllImages />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
