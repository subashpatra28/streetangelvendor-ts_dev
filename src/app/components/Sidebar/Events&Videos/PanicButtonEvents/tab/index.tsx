import TimelapseSharpIcon from "@mui/icons-material/TimelapseSharp";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { panicButtonColumns } from "../../../../../constants";
import { PanicButtonEvent } from "../../../../../../global.types";
import { getPanicButtonEvents } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const PanicEventsTab = (props: Props) => {
  const [panicEvents, setPanicEvents] = useState<PanicButtonEvent[]>([]);
  console.log("panicButtonEvents", props);

  // const ActionBtns2 = (data: $TSFixMe) => {
  //   return (
  //     <div className="imptabbody">
  //       <Link to="#" className="tabLink">
  //         <TimelapseSharpIcon className="dropico" />
  //       </Link>
  //     </div>
  //   );
  // };
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.panicButtonEvents?.result) {
      setPanicEvents(props.panicButtonEvents.result);
    }
    return () => {};
  }, [props.panicButtonEvents]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getPanicButtonEvents();
    } catch (error) {
      console.log("error in PanicButtonEventsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={panicEvents}
        columns={panicButtonColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

// export default PanicEventsTab;
const mapStateToProps = (state: RootState) => ({
  panicButtonEvents: state.dataStore.panicButtonEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getPanicButtonEvents: () => dispatch(getPanicButtonEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(PanicEventsTab);
