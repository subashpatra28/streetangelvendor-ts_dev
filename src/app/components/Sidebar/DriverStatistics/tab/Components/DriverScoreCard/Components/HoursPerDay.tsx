import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataHours } from "../../../../../../../constants";

const HoursPerDay = () => (
  <div id="chart">
    <ReactApexChart
      series={dataHours.series}
      // @ts-expect-error
      options={dataHours.options}
      type="bar"
      height={265}
    />

    <ul className="driverScoreDetails">
      <li>Driving Time - 92.52 Hrs</li>
      <li>Idling Time - 0.01 Hrs</li>
      <li>Stopped Time - 0.00 Hrs</li>
    </ul>
  </div>
);

export default HoursPerDay;
