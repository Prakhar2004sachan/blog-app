import express from "express";
import upload from "../middleware/multer.js";
import {
  addPost,
  listPost,
  removePost,
  selectTag,
  singlePost,
  updatePost,
} from "../controllers/postController.js";
import { checkAdmin } from "../middleware/adminAuth.js";

const postRouter = express.Router();

// Routes
postRouter.post("/add", checkAdmin, upload, addPost);
postRouter.get("/list-posts", listPost); // List all posts
postRouter.post("/single-post", singlePost); // single post
postRouter.post("/remove", checkAdmin, removePost); // Remove post
postRouter.get("/select", selectTag); // select tag post
postRouter.post("/update", checkAdmin, upload, updatePost); // Update post

export default postRouter;
