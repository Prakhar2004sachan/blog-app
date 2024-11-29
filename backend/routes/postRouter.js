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

const postRouter = express.Router();

// Routes
postRouter.post("/add", upload, addPost);
postRouter.get("/list-posts", listPost); // List all posts
postRouter.post("/single-post", singlePost); // single post
postRouter.post("/remove", removePost); // Remove post
postRouter.get("/select", selectTag); // Remove post
postRouter.post("/update", upload, updatePost); // Update post

export default postRouter;
