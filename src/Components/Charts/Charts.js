import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // For Chart.js 3
import "chartjs-adapter-date-fns"; // Import the date adapter

const Charts = ({ data }) => {
  // Your chart configuration and rendering logic...
  const chartData = {
    labels: data.map((item) => item.wdate), // Assuming 'wdate' is your date field
    datasets: [
      {
        label: "Temperature",
        data: data.map((item) => parseFloat(item.wtemp)), // Convert string temperatures to numbers
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "minute",
          // Ensure your date format here matches your actual data format
          tooltipFormat: "MMM d, yyyy, h:mm:ss a",
        },
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperature",
        },
      },
    },
    layout: {
      padding: {
        left: 100,
        right: 100,
        bottom: 150,
      },
    },
    // Additional configuration options...
  };

  return <Line className="bg-light" data={chartData} options={options} />;
};

export default Charts;
