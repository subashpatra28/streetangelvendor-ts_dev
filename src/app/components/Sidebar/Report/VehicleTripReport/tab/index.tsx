import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { vehicleTripReportColumns } from "../../../../../constants";
import { getVehicleTrips } from "../../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import DataTable from "../../../../Common/DataTable";
import { VehicleTrip } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const VehicleReportTab = (props: Props) => {
  const [vehicleTrips, setVehicleTrips] = useState<VehicleTrip[]>([]);
  console.log("vehicleTrips", props);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);

  useEffect(() => {
    if (props.vehicleTrips?.result) {
      setVehicleTrips(props.vehicleTrips.result);
    }
    return () => {};
  }, [props.vehicleTrips]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      await props.getVehicleTrips();
    } catch (error) {
      console.log("error in VehicleTripsTab api", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={vehicleTrips}
        columns={vehicleTripReportColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default VehicleReportTab;
const mapStateToProps = (state: RootState) => ({
  vehicleTrips: state.dataStore.vehicleTrips,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getVehicleTrips: () => dispatch(getVehicleTrips()),
});
export default connect(mapStateToProps, mapDispatchToProps)(VehicleReportTab);
