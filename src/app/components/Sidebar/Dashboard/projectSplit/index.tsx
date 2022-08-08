import React from "react";
import ReactApexChart from "react-apexcharts";
import { dataProject } from "../../../../constants";

function ProjectSplit() {
  return (
    <div id="chart">
      <ReactApexChart
        // @ts-expect-error
        options={dataProject.options}
        series={dataProject.Team}
        type="pie"
      />
    </div>
  );
}

export default ProjectSplit;
