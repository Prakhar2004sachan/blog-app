import express from "express";
import upload from "../middleware/multer.js";
// import uploadImg from "../controllers/imgController.js";
import uploadTool from "../middleware/uploadTool.js";
import { uploadImg, listImg, deleteImg } from "../controllers/imgController.js";
import { checkAdmin } from "../middleware/adminAuth.js";

const imgRouter = express.Router();

imgRouter.post("/upload",checkAdmin, uploadTool, uploadImg);
imgRouter.get("/all", listImg);
imgRouter.post("/remove",checkAdmin, deleteImg);

export default imgRouter;
