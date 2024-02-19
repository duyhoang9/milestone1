import React, { useState } from "react";
import "./App.css";
import Charts from "./Components/Charts/Charts.js";
import Data from "./Data.js";
import Hero from "./Components/Hero/Hero.js";
import Tables from "./Components/Tables/Tables.js";
import FileUpload from "./Components/FileUpload.js";

function App() {
  const reversedData = Data.slice().reverse();
  const weather = reversedData.map((item) => {
    return (
      <Tables
        wdate={item.wdate}
        wtemp={item.wtemp}
        whumid={item.whumid}
        wpressure={item.wpressure}
      />
    );
  });

  const [showCharts, setShowCharts] = useState(false);

  const renderOriginalData = () => (
    <section
      id="weather-section-container"
      className=" py-3 d-flex flex-row flex-wrap justify-content-center align-items-center gap-5"
    >
      {weather}
    </section>
  );

  const handleFileUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("processFile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to process file");
      }

      const result = await response.json();
      console.log("File processed successfully: ", result);
    } catch (error) {
      console.log("Error processing file: ", error.message);
    }
  };

  return (
    <div className="text-center h-100 bg-light">
      <Hero />
      <FileUpload onFileUpload={handleFileUpload} />
      <button
        type="button"
        onClick={() => setShowCharts(!showCharts)}
        className="btn btn-primary"
      >
        {showCharts ? "Show Original Data" : "Show Charts"}
      </button>
      {showCharts ? (
        <section
          id="weather-section-container"
          className="py-3 d-flex flex-row flex-wrap justify-content-center align-items-center gap-5"
        >
          <Charts data={Data} />
        </section>
      ) : (
        renderOriginalData()
      )}
    </div>
  );
}

export default App;
