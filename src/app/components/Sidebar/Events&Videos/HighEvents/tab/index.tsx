import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { highEventsColumns } from "../../../../../constants";
import { getHighEvents } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { GetHighEvent } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const HighEventsTab = (props: Props) => {
  const [highEventsList, setHighEventsList] = useState<GetHighEvent[]>([]);
  console.log("highEvents", props);

  // const ActionBtns1 = (data) => {
  //   return (
  //   <div className="imptabbody">
  //     <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
  //       <PlayCircleOutlineSharpIcon className="dropico" />
  //     </Link>
  //   </div>
  // );
  // };
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
    <>
      <DataTable
        data={highEventsList}
        columns={highEventsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  highEvents: state.dataStore.highEvents,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getHighEvents: () => dispatch(getHighEvents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HighEventsTab);
