import React, { useState } from "react";
import "./Hero.css";

const Hero = () => {
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
    <div className="" id="hero-wrapper">
      <div className="title bg-light px-4 py-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Raspberry Pi Weather Information
        </h1>
      </div>
      <div className="py-5 text-center">
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
    </div>
  );
};

export default Hero;
