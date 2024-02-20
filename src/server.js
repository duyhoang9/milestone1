const express = require("express");
const multer = require("multer"); // For handling file uploads
const upload = multer(); // Create a multer instance

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle file upload
app.post("/processFile", upload.single("file"), (req, res) => {
  // Access the uploaded file using req.file
  console.log("File uploaded:", req.file);
  // Your file processing logic here
  res.json({ message: "File processed successfully" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
