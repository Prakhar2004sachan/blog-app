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
    const links = req.body.links[0];
    const tagsArr = tags.split(",").map((tag) => tag.trim());
    const linksArr = links
      .split(",")
      .map((link) => link.trim().replace(/\s+/g, "-"))
      .filter(Boolean);

    const postData = {
      heading,
      shortDescription,
      mainImg,
      links: linksArr,
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
    const posts = await postModel.find({}).sort({ date: -1 }); // Latest posts first
    res.json({ success: true, posts });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Selected tag
const selectTag= async (req, res) => {
  try {
    const { tag } = req.query; // Get the tag from the query parameters
    let query = {};

    if (tag && tag !== "All Categories") {
      query = { tags: tag }; // Filter posts that have the specified tag
    }

    const posts = await postModel.find(query).sort({ date: -1 }); // Latest posts first
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
    res.json({ success: true, message: "Post Deleted" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// list single post
const singlePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const postData = await postModel.findById(postId);
    res.json({ success: true, postData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId } = req.body;

    // Extract the post ID from the array
    if (!Array.isArray(postId) || postId.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid post ID" });
    }
    // const postIdValue = req.body.postId;

    // Parse and validate tags and links
    const tags = req.body.tags[0];
    const links = req.body.links[0];
    const contentArr = req.body.content[0];
    const heading = req.body.heading[0]; // Access the first element of the heading array
    const content = req.body.content[0]; // Access the first element of the heading array
    const shortDescription = req.body.shortDescription[0]; // Access the first element of the description array
    const tagsArr = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean); // Remove empty strings
    const linksArr = links
      .split(",")
      .map((link) => link.trim().replace(/\s+/g, "-"))
      .filter(Boolean);

    let mainImg = req.body.mainImg;

    // Handle new image upload
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.filepath, {
        resource_type: "image",
      });
      mainImg = result.secure_url; // New image URL
    }

    // Update the post in the database
    const postData = await postModel.updateOne(
      { _id: postId }, // Assuming `_id` corresponds to the ID in your database
      {
        $set: {
          heading,
          shortDescription,
          mainImg,
          tags: tagsArr,
          links: linksArr,
          content: contentArr,
        },
      }
    );

    if (postData.modifiedCount === 0) {
      return res.status(200).json({
        success: false,
        message: "No changes made to the post",
      });
    }

    res
      .status(200)
      .json({ success: true, message: "Post updated successfully!", postData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};



export { addPost, listPost, singlePost, updatePost, removePost, selectTag };
