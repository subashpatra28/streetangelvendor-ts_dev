import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { requestedVideoColumns } from "../../../../../constants";
import { getRequestedVideo } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { RequestedVideo } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const RequestedVideoTab = (props: Props) => {
  const [requestedVideos, setRequestedVideos] = useState<RequestedVideo[]>([]);
  console.log("requestedVideos", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.requestedVideos?.result) {
      setRequestedVideos(props.requestedVideos.result);
    }
    return () => {};
  }, [props.requestedVideos]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getRequestedVideo();
    } catch (error) {
      console.log("error in requestedVideosTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="mt-3">
      <DataTable
        data={requestedVideos}
        columns={requestedVideoColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  requestedVideos: state.dataStore.requestedVideos,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getRequestedVideo: () => dispatch(getRequestedVideo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RequestedVideoTab);
