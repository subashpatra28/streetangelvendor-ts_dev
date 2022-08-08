import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { eventReportColumns } from "../../../../../constants";
import { getEventReports } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { EventReport } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const EventReportTab = (props: Props) => {
  const [eventReportsList, setEventReportsList] = useState<EventReport[]>([]);
  console.log("eventReportProps", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.eventReports?.result) {
      setEventReportsList(props.eventReports.result);
    }
    return () => {};
  }, [props.eventReports]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getEventReports();
    } catch (error) {
      console.log("error in EventReportsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <DataTable
      data={eventReportsList}
      columns={eventReportColumns}
      bordered
      hover={true}
      responsive={true}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  eventReports: state.dataStore.eventReports,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getEventReports: () => dispatch(getEventReports()),
});
export default connect(mapStateToProps, mapDispatchToProps)(EventReportTab);
