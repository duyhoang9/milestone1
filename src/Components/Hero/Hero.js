import React, { useState } from "react";
import "./Hero.css";
import FileUpload from "../FileUpload.js";

const Hero = () => {
  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:3000/processFile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process file.");
      }

      const result = await response.json();
      console.log("File processed successfully: ", result);
    } catch {
      console.log("Error processing file: ", error.message);
    }
  };
  return (
    <div className="" id="hero-wrapper">
      <div className="title bg-light px-4 py-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">
          Raspberry Pi Weather Information
        </h1>
      </div>
      <div className="text-center">
        <FileUpload onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
};

export default Hero;
