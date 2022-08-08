import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { geoFenceColumns } from "../../../../../constants";
import { getGeoFenceEvents } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { GeoFenceEvent } from "../../../../../../global.types";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ALERTEventsTab = (props: Props) => {
  const [geoFenceEvents, setGeoFenceEvents] = useState<GeoFenceEvent[]>([]);
  console.log("GeoFenceEvents", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.geoFenceEvents?.result) {
      setGeoFenceEvents(props.geoFenceEvents.result);
    }
    return () => {};
  }, [props.geoFenceEvents]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getGeoFenceEvents();
    } catch (error) {
      console.log("error in GeoFenceEventsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={geoFenceEvents}
        columns={geoFenceColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

// export default ALERTEventsTab;
const mapStateToProps = (state: RootState) => ({
  geoFenceEvents: state.dataStore.geoFenceEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getGeoFenceEvents: () => dispatch(getGeoFenceEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ALERTEventsTab);
