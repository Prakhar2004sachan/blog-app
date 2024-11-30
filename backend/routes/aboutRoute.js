import express from "express";
import { updateAbout, getAbout } from "../controllers/aboutController.js";
import { checkAdmin } from "../middleware/adminAuth.js";

const aboutRouter = express.Router();

// Routes
aboutRouter.post("/update-about",checkAdmin, updateAbout);
aboutRouter.get("/get-about", getAbout);

export default aboutRouter;
