import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  shortDescription: { type: String, required: true },
  mainImg: { type: String }, // Single image URL
  tags: { type: Array, required: true }, // Array of tags
  date: { type: Number, default: Date.now },
  content: { type: String, required: true },
});

const postModel = mongoose.models.posts || mongoose.model("posts", postSchema);

export default postModel;
