import React from "react";
import Data from "../../Data.js";

const Charts = (props) => {
  return (
    <div className="card-wrapper p-5 bg-light border border-3 border-dark rounded-4 w-25">
      <div className="table-wrapper bg-light text-dark d-flex flex-row justify-content-center">
        <table className="table table-reflow m-0 table-light">
          <thead>
            <th className="text-start">{props.wdate}</th>
          </thead>
          <tbody>
            <tr className="table-light table-group-divider">
              <th className="text-start">Temperature:</th>
              <td className="text-start">{props.wtemp}</td>
            </tr>
            <tr className="table-light">
              <th className="text-start">Relative Humidity:</th>
              <td className="text-start">{props.whumid}</td>
            </tr>
            <tr className="table-light">
              <th className="text-start">Atmospheric Pressure:</th>
              <td className="text-start">{props.wpressure}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Charts;
