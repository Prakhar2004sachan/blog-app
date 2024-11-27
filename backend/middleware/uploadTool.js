import formidable from "formidable";
import path from "path";
import fs from "fs";

const uploadTool = async (req, res, next) => {
  // const uploadDir = path.join(process.cwd(), "uploads");

  // // Ensure the directory exists
  // if (!fs.existsSync(uploadDir)) {
  //   fs.mkdirSync(uploadDir, { recursive: true });
  // }

  const form = formidable({
    // uploadDir, // Directory for temporary file storage
    keepExtensions: true, // Preserve file extensions
    maxFileSize: 10 * 1024 * 1024, // 10MB
    multiples: false, // Single file upload
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error("Formidable error:", err);
      return res.status(400).json({ success: false, message: err.message });
    }

    console.log("Form fields:", fields);
    console.log("Uploaded file:", files);

    req.body = fields;
    req.file = files.img; // Ensure the field name matches
    next();
  });
};

export default uploadTool;
