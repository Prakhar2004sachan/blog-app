import formidable from "formidable";
import path from "path";

const upload = async (req, res, next) => {
  const form = formidable({
    uploadDir: path.join(process.cwd(), "uploads"), // Directory for file uploads
    keepExtensions: true, // Preserve file extensions
    maxFileSize: 10 * 1024 * 1024, // Limit file size to 10MB
    multiples: false, // Allow only single file upload per field
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(400).json({ success: false, message: err.message });
    }

    console.log("Form fields:", fields); // Debugging: log form fields
    console.log("Uploaded files:", files); // Debugging: log uploaded files

    req.body = fields; // Attach fields to `req.body`
    req.file = files.mainImg ? files.mainImg[0] : null; // Attach the uploaded file to `req.file` (ensure `img` matches the form field name)
    next();
  });
};

export default upload;
