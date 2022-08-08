import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { videoRequestReportColumns } from "../../../../../constants";
import { getVideoRequestReports } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { VideoRequestReport } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const VideoRequestReportTab = (props: Props) => {
  const [videoRequestReportsList, setVideoRequestReportsList] = useState<
    VideoRequestReport[]
  >([]);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.videoRequestReports?.result) {
      setVideoRequestReportsList(props.videoRequestReports.result);
    }
    return () => {};
  }, [props.videoRequestReports]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getVideoRequestReports();
    } catch (error) {
      console.log("error in lowEventsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={videoRequestReportsList}
        columns={videoRequestReportColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default VideoRequestReportTab;
const mapStateToProps = (state: RootState) => ({
  videoRequestReports: state.dataStore.videoRequestReports,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getVideoRequestReports: () => dispatch(getVideoRequestReports()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoRequestReportTab);
