import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { dashHighEventsColumns } from "../../../../constants";
import { getHighEvents } from "../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import DataTable from "../../../Common/DataTable";
import { GetHighEvent } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const HighEvents = (props: Props) => {
  const [highEventsList, setHighEventsList] = useState<GetHighEvent[]>([]);
  console.log("highEvents", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.highEvents?.result) {
      setHighEventsList(props.highEvents.result);
    }
    return () => {};
  }, [props.highEvents]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getHighEvents();
    } catch (error) {
      console.log("error in HighEventsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <div className="mt-3">
      <DataTable
        data={highEventsList}
        columns={dashHighEventsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </div>
  );
};

// export default HighEvents;
const mapStateToProps = (state: RootState) => ({
  highEvents: state.dataStore.highEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getHighEvents: () => dispatch(getHighEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HighEvents);
