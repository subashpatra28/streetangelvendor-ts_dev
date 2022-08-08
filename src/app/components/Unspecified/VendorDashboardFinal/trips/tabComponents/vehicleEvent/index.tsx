import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataVehicle } from "../../../../../../constants";

function VehicleEvent() {
  return (
    <div id="chart">
      <ReactApexChart
        options={dataVehicle.options}
        series={dataVehicle.series}
        type="area"
        height={350}
      />
    </div>
  );
}

export default VehicleEvent;
