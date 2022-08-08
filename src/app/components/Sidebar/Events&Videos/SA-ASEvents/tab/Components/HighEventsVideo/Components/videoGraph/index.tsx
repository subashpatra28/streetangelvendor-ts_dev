import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { VideoOptions } from '../../../../../../../../../constants';

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
