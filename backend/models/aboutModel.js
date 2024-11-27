import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  content: { type: String, required: true },
});

const aboutModel =
  mongoose.models.about || mongoose.model("about", aboutSchema);

export default aboutModel;
