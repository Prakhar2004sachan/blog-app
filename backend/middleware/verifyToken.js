import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res
      .status(407)
      .json({ success: false, message: "Unathorized - no token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res
        .status(408)
        .json({ success: false, message: "Unathorized - invalid token" });

    req.userId = decoded.userId;
    next();
  } catch (error) {}
};