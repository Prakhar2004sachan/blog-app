import express from "express";
import upload from "../middleware/multer.js";
import {
  addPost,
  listPost,
  removePost,
  signlePost,
} from "../controllers/postController.js";

const postRouter = express.Router();

// Routes
postRouter.post("/add", upload, addPost);
postRouter.get("/list-posts", listPost); // List all posts
postRouter.post("/sigle-post", signlePost); // single post
postRouter.post("/remove", removePost); // Remove post

export default postRouter;
