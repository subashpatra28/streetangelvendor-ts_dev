import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { lowEventsColumns } from "../../../../../constants";
import { getLowEvents } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { GetLowEvent } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const LowEventsTab = (props: Props) => {
  const [lowEvents, setLowEvents] = useState<GetLowEvent[]>([]);
  console.log("lowEvents", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.lowEvents?.result) {
      setLowEvents(props.lowEvents.result);
    }
    return () => {};
  }, [props.lowEvents]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getLowEvents();
    } catch (error) {
      console.log("error in lowEventsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={lowEvents}
        columns={lowEventsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  lowEvents: state.dataStore.lowEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getLowEvents: () => dispatch(getLowEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(LowEventsTab);
