import express from "express";
import { updateAbout, getAbout } from "../controllers/aboutController.js";

const aboutRouter = express.Router();

// Routes
aboutRouter.post("/update-about", updateAbout);
aboutRouter.get("/get-about", getAbout);

export default aboutRouter;
