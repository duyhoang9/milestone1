import React, { useState } from "react";
import "./App.css";
import Charts from "./Components/Charts/Charts.js";
import Data from "./Data.js";
import Hero from "./Components/Hero/Hero.js";
import Tables from "./Components/Tables/Tables.js";

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

  return (
    <div className="text-center h-100 bg-light">
      <Hero />
      <button
        onClick={() => setShowCharts(!showCharts)}
        style={{ margin: "10px" }}
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
