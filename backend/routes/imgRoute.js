import express from "express";
import upload from "../middleware/multer.js";
// import uploadImg from "../controllers/imgController.js";
import uploadTool from "../middleware/uploadTool.js";
import { uploadImg, listImg, deleteImg } from "../controllers/imgController.js";

const imgRouter = express.Router();

imgRouter.post("/upload", uploadTool, uploadImg);
imgRouter.get("/all", listImg);
imgRouter.post("/remove", deleteImg);

export default imgRouter;
