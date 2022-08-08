import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// @ts-expect-error TS(2307): Cannot find module '../../../../../constants' or i... Remove this comment to see the full error message
import { VideoOptions } from '../../../../../constants';

function VideoGraph() {
  return (
    <div className="vidchart tabAll">
      <HighchartsReact
        className="tabAll"
        options={VideoOptions}
        highcharts={Highcharts}
        type="spline"
      />
      {/* window.dispatchEvent(new Event('resize')); */}
    </div>
  );
}

export default VideoGraph;
