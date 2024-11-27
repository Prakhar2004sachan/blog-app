import express from "express";
import cors from "cors";
import "dotenv/config"; // Load environment variables
import connectDB from "./config/mongodb.js"; // Database connection
import connectCloudinary from "./config/cloudinary.js"; // Cloudinary setup
import postRouter from "./routes/postRouter.js"; // Routes for posts
import aboutRouter from "./routes/aboutRoute.js";
import imgRouter from "./routes/imgRoute.js";

// Initialize App
const app = express();
const port = 4000;

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(cors());
// app.use(bodyParser.json());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// API Routes
app.use("/api/blog", postRouter); // Blog routes
app.use("/api/about", aboutRouter); // Update About Page
app.use("/api/img", imgRouter); //Img tool

// Health Check
app.get("/", (req, res) => {
  res.send("API working");
});

// Start Server
app.listen(port, () => console.log("Server started on Port " + port));
