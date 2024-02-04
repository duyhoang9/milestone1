import React, { useState } from 'react';
import "./App.css";
import Charts from "./Components/Charts/Charts.js";
import Data from "./Data.js";
import Hero from "./Components/Hero/Hero.js";

function App() {
  const [showCharts, setShowCharts] = useState(false);

  const renderOriginalData = () => (
    <div className="original-data-container">
      <h2>Original Data View</h2>
      <ul className="data-list">
        {Data.map((item, index) => (
          <li key={index} className="data-item">
            Date: {item.wdate}, Temperature: {item.wtemp}°C, Humidity: {item.whumid}%, Pressure: {item.wpressure} hPa
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="text-center h-100 bg-light">
      <Hero />
      <button onClick={() => setShowCharts(!showCharts)} style={{margin: '10px'}}>
        {showCharts ? 'Show Original Data' : 'Show Charts'}
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
