import express from "express";
import updateAbout from "../controllers/aboutController.js";

const aboutRouter = express.Router();

// Routes
aboutRouter.post("/update-about", updateAbout);
aboutRouter.get("/get-about", updateAbout);


export default aboutRouter;
