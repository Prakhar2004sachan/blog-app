import formidable from "formidable";
import path from "path";

// Set up formidable configuration
const upload = (req, res, next) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, "../uploads"); // Specify the upload directory
  form.keepExtensions = true; // Keep file extensions
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ success: false, message: err.message });
    }

    req.body = fields; // Form fields (non-file data)
    req.files = files; // Files uploaded
    next(); // Pass control to the next middleware (e.g., controller)
  });
};

export default upload;
