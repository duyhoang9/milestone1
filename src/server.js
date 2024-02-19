import express from "express";
import multer from "multer";
const { exec } = require("child_process");

const app = express();
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  const uploadedFilePath = req.file.path;

  exec(`node dataSync.js`, (error, stdout, stderr) => {
    if (error) {
      console.log("Error processing file:", error);
      return res.status(500).send("Error processing file");
    }

    console.log("File processes successfully:", stdout);
    res.send("File processes successfully");
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port`, port);
});
