import jwt from "jsonwebtoken";
import express from "express";
import cookieParser from "cookie-parser";

// Make sure cookie-parser is used in your app
const app = express();
app.use(cookieParser());

export const checkAdmin = async (req, res, next) => {
  try {
    // Get the token from the cookies
    const token = req.cookies.token;

    // Check if token exists
    if (!token) {
      return res.status(403).json({
        success: false,
        message: "You are not an admin. No token provided.",
      });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the email in the token matches the admin email
    if (decodedToken.userId !== process.env.ADMIN_USERID) {
      return res.status(403).json({
        success: false,
        message: "You are not an admin.",
      });
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Admin Check Failed:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
