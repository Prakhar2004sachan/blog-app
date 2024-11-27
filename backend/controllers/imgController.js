import { v2 as cloudinary } from "cloudinary";
import imgModel from "../models/imageModel.js";
import fs from "fs";

const uploadImg = async (req, res) => {
  try {
    console.log("File received:", req.file); // Log file information

    // Check if the file is valid
    if (!req.file || !req.file[0]) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    const filePath = req.file[0].filepath; // Access the file's path correctly
    console.log("File path for Cloudinary:", filePath);

    // Check if the file exists before uploading to Cloudinary
    if (!fs.existsSync(filePath)) {
      return res
        .status(400)
        .json({ success: false, message: "File does not exist" });
    }

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "image",
      folder: "your_folder_name", // Optional: specify a folder
    });

    console.log("Cloudinary upload result:", result);

    // Save to database
    const imgData = { img: result.secure_url };
    const postImg = new imgModel(imgData);
    await postImg.save();

    res.status(201).json({ success: true, message: "Image Uploaded", imgData });
  } catch (error) {
    console.error("Error uploading image:", error.message);
    res.status(500).json({
      success: false,
      message: "Error uploading image",
      error: error.message,
    });
  }
};

const listImg = async (req, res) => {
  try {
    const images = await imgModel.find({});
    res.json({ success: true, message: "All images", images });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

const deleteImg = async (req, res) => {
  try {
    const { id } = req.body; // Extract ID from request body
    if (!id) {
      return res.json({ success: false, message: "Image ID is required" });
    }

    await imgModel.findByIdAndDelete(id); // Delete the image by ID
    res.json({ success: true, message: "Image deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { uploadImg, listImg, deleteImg };
