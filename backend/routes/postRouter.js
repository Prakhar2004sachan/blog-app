import express from "express";
import upload from "../middleware/multer.js";
import { addPost, listPost } from "../controllers/postController.js";

const postRouter = express.Router();

// Routes
postRouter.post("/add", upload, addPost); 
postRouter.get("/list-posts", listPost); // List all posts

export default postRouter;
