import { useEffect, useMemo, useState } from "react";
import DataTable from "../../../Common/DataTable";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import TimelapseSharpIcon from "@mui/icons-material/TimelapseSharp";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { ROUTES } from "../../../../routes/routes";
import { getHighEvents } from "../../../../redux/reducers/DataReducer/data.actions";
import { AppDispatch } from "../../../../redux/store/store";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { GetHighEvent } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const SingularReportTab = (props: Props) => {
  const [highEventsList, setHighEventsList] = useState<GetHighEvent[]>([]);
  console.log("highEvents", props);

  const ActionBtns2 = (data: $TSFixMe) => {
    return (
      <div className="imptabbody">
        <Link to={ROUTES.HIGH_EVENTS_VIDEO} className="tabLink">
          <TimelapseSharpIcon className="dropico" />
        </Link>
      </div>
    );
  };
  const ActionBtns3 = (data: $TSFixMe) => {
    return (
      <div className="imptabbody">
        {/* @ts-expect-error TS(2551): Property 'SA_AS_EVENTS' does not exist on type '{ ... Remove this comment to see the full error message */}
        <Link to={ROUTES.SA_AS_EVENTS} className="tabLink">
          <LocationOnOutlinedIcon className="dropico" />
        </Link>
      </div>
    );
  };
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (Object.keys(props.highEvents).length && props.highEvents.result) {
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

  // @ts-expect-error TS(2554): Expected 2 arguments, but got 1.
  const columns = useMemo(() => [
    { title: "Vehicle Reg#", data: "vehicleRegestrationNo" },
    { title: "Device ID", data: "deviceId" },
    { title: " Organization", data: "organizationManagement.name" },
    { title: "Driver", data: "driverManagement.name" },
    { title: "Speed (km/h):", data: "id" },
    {
      title: "Location",
      format: (data: $TSFixMe) => <ActionBtns3 data={data} />,
    },
    { title: "Time", data: "createdDate" },
  ]);

  return (
    <>
      <DataTable
        data={highEventsList}
        columns={columns}
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
export default connect(mapStateToProps, mapDispatchToProps)(SingularReportTab);
