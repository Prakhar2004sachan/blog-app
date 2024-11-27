import { Route, Routes } from "react-router-dom";
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

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center px-4 sm:px-8 md:px-[5rem] 2xl:px-[20rem]">
        <ToastContainer position="bottom-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Posts />} />
          <Route path="/:postId" element={<PostInfo />} />
          <Route path="/write" element={<WritePost />} />
          <Route path="/about" element={<EditAbout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<ChatComponent />} />
          <Route path="/editor" element={<WritePostJ />} />
          <Route path="/img-tool" element={<ImgTool />} />
          <Route path="/uploded-images" element={<AllImages />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
