import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
  img: { type: String, required: true },
});

const imgModel =
  mongoose.models.imgtool || mongoose.model("imgtool", imgSchema);

export default imgModel;
