import { v2 as cloudinary } from "cloudinary";
import postModel from "../models/postModel.js";

// Add Post
const addPost = async (req, res) => {
  try {
    console.log("File received:", req.file); // Debug uploaded file
    console.log("Form data received:", req.body); // Debug form fields

    if (!req.file) {
      return res.json({ success: false, message: "Image file is required." });
    }

    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.filepath, {
      resource_type: "image", // Specify resource type
    });

    console.log("Cloudinary upload result:", result); // Debug Cloudinary response
    const mainImg = result.secure_url; // Get the uploaded image URL

    const heading = req.body.heading[0]; // Access the first element of the heading array
    const content = req.body.content[0]; // Access the first element of the heading array
    const shortDescription = req.body.shortDescription[0]; // Access the first element of the description array
    const tags = req.body.tags[0];
    const tagsArr = tags.split(",").map((tag) => tag.trim());

    const postData = {
      heading,
      shortDescription,
      mainImg,
      tags: tagsArr,
      date: Date.now(),
      content,
    };

    console.log("Post data:", postData);

    const post = new postModel(postData);
    await post.save();

    res.json({ success: true, message: "Post Added" });
  } catch (error) {
    console.error("Error in addPost:", error);
    res.json({ success: false, message: error.message });
  }
};

// List Posts
const listPost = async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// remove post
const removePost = async (req, res) => {
  try {
    const { postId } = req.body;
    await postModel.findByIdAndDelete(postId);
    res.json({ success: false, message: "Post Deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// list single post
const signlePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const postData = await postModel.findById(postId);
    res.json({ success: true, postData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { addPost, listPost, signlePost, removePost };
