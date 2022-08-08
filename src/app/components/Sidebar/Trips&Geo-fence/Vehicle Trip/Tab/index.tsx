import { useEffect, useState } from "react";
import DataTable from "../../../../Common/DataTable";

import { connect } from "react-redux";
import { vehicleTripColumns } from "../../../../../constants";
import {
  endLoading,
  startLoading,
} from "../../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../../redux/store/store";
import { getVehicleTrips } from "../../../../../redux/reducers/DataReducer/data.actions";
import { VehicleTrip } from "../../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const VehicleTripTab = (props: Props) => {
  const [vehicleTripsList, setVehicleTripsList] = useState<VehicleTrip[]>([]);
  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);
  useEffect(() => {
    if (Object.keys(props.vehicleTrips).length && props.vehicleTrips.result) {
      setVehicleTripsList(props.vehicleTrips.result);
    }
    return () => {};
  }, [props.vehicleTrips]);

  const apiCalls = async () => {
    try {
      props.startLoading();
      if (!props.vehicleTrips?.result) await props.getVehicleTrips();
    } catch (error) {
      console.log("error in VehicleTripTab", error);
    } finally {
      await props.endLoading();
    }
  };

  return (
    <>
      <DataTable
        data={vehicleTripsList}
        columns={vehicleTripColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </>
  );
};

//export default VehicleTripTab;
const mapStateToProps = (state: RootState) => ({
  vehicleTrips: state.dataStore.vehicleTrips,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getVehicleTrips: () => dispatch(getVehicleTrips()),
});
export default connect(mapStateToProps, mapDispatchToProps)(VehicleTripTab);
