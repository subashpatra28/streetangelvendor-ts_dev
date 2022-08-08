import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataHarsh } from "../../../../../../../constants";

function HarshEvents() {
  return (
    <>
      <ReactApexChart
        // @ts-expect-error
        options={dataHarsh.options}
        series={dataHarsh.series}
        type="donut"
        height={300.467}
      />
      <ul className="driverScoreDetails">
        <li>Acceleration Events - 167</li>
        <li>Braking Events - 19</li>
        <li>Cornering - 10</li>
      </ul>
    </>
  );
}

export default HarshEvents;
