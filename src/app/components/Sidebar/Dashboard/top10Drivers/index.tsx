import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataTop10 } from "../../../../constants";

function Top10Drivers() {
  return (
    <ReactApexChart
      options={dataTop10.options}
      series={dataTop10.series}
      type="bar"
      height={350}
    />
  );
}

export default Top10Drivers;
