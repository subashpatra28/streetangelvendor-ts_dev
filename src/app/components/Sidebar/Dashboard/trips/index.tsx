import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { tripsColumns } from "../../../../constants";
import { getVehicleTrips } from "../../../../redux/reducers/DataReducer/data.actions";
import {
  endLoading,
  startLoading,
} from "../../../../redux/reducers/general/general.actions";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { AppDispatch } from "../../../../redux/store/store";
import DataTable from "../../../Common/DataTable";
import { VehicleTrip } from "../../../../../global.types";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Trips = (props: Props) => {
  const [tripsList, setTripsList] = useState<VehicleTrip[]>([]);
  console.log("trips", props);

  useEffect(() => {
    apiCalls();
    return () => {};
  }, []);
  useEffect(() => {
    if (props.vehicleTrips?.result) {
      setTripsList(props.vehicleTrips.result);
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
    <div className="mt-3">
      <DataTable
        data={tripsList}
        columns={tripsColumns}
        bordered
        hover={true}
        responsive={true}
      />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  vehicleTrips: state.dataStore.vehicleTrips,
});
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  startLoading: () => dispatch(startLoading()),
  endLoading: () => dispatch(endLoading()),
  getVehicleTrips: () => dispatch(getVehicleTrips()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Trips);
