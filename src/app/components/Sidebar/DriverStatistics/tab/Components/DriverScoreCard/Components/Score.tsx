import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataScore } from "../../../../../../../constants";

function Score() {
  return (
    <div id="chart">
      <ReactApexChart
        // @ts-expect-error
        options={dataScore.options}
        series={dataScore.series}
        type="radialBar"
        height={300}
      />
    </div>
  );
}

export default Score;
