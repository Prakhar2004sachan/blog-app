import aboutModel from "../models/aboutModel.js";
import { ObjectId } from "mongodb";

const updateAbout = async (req, res) => {
  try {
    const { heading, content } = req.body;

    if (!heading || !content) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid input data" });
    }

    const aboutPage = await aboutModel.updateOne(
      { slug: "about" },
      { $set: { heading, content } }
    );

    if (aboutPage.matchedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: "About page not found" });
    }

    res.json({ success: true, message: "About Page Updated" });
  } catch (error) {
    console.error("Error updating about page:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAbout = async (req, res) => {
  try {
    const aboutData = await aboutModel.find({});
    res.json({ success: true, aboutData });
  } catch (error) {
    res.json({ success: false, message: error });
  }
};

export { updateAbout, getAbout };
