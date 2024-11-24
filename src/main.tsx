import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <NotFoundPage/>
//   },
// ]);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
   <RecoilRoot>
    <App /></RecoilRoot>
  </BrowserRouter>
);
