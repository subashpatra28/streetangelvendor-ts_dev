import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { SaaSEvent } from "../../../../../../global.types";
import { saAsEventsColumns } from "../../../../../constants";
import { getSaAsEvents } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const ActiveSafetyTab = (props: Props) => {
  const [saAsEvents, setSaAsEvents] = useState<SaaSEvent[]>([]);
  console.log("saAsEvents", props);

  // const ActionBtns1 = (data) => {
  //   return (
  //     <div className="imptabbody">
  //       <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
  //         <PlayCircleOutlineSharpIcon className="dropico" />
  //       </Link>
  //     </div>
  //   );
  // };

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    setSaAsEvents([...(props.saAsEvents.result ?? [])]);
    return () => {};
  }, [props.saAsEvents]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getSaAsEvents();
    } catch (error) {
      console.log("error in activeSafetyTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={saAsEvents}
        columns={saAsEventsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

// export default ActiveSafetyTab;
const mapStateToProps = (state: RootState) => ({
  saAsEvents: state.dataStore.saAsEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getSaAsEvents: () => dispatch(getSaAsEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ActiveSafetyTab);
