import React, { useState } from "react";

// upload your own data from the script
const FileUpload = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      alert("Please select a file");
    }
  };

  return (
    <div className="py-5">
      <h3>Upload Your Own Data (weather_log.txt)</h3>
      <div
        id="input-wrapper"
        className="py-2 text-center d-flex flex-row justify-content-center"
      >
        <input
          type="file"
          onChange={handleFileChange}
          className="form-control w-25 text-center"
          id="formFile"
          name="file"
        />
      </div>
      <div
        id="btn-wrapper"
        className="py-2 text-center d-flex flex-row justify-content-center"
      >
        <button
          type="button"
          onClick={handleUpload}
          className="btn btn-primary"
        >
          Upload Data
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
