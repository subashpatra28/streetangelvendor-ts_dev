import {
  GET_VEHICLE_TRIP_REPORTS,
  GET_VEHICLE_TRIP_REPORTS_ERROR,
  GET_VEHICLE_TRIP_REPORTS_SUCCESS,
} from "./vehicleTripReports.types";

export const getVehicleTripReports = () => {
  console.log("get VehicleTripReports received");
  return {
    type: GET_VEHICLE_TRIP_REPORTS,
    meta: { thunk: true },
  };
};

export const getVehicleTripReportsSuccess = ({
  data,
  meta
}: $TSFixMe) => {
  return {
    type: GET_VEHICLE_TRIP_REPORTS_SUCCESS,
    data,
    meta,
  };
};
export const getVehicleTripReportsError = ({
  error,
  meta
}: $TSFixMe) => {
  return {
    type: GET_VEHICLE_TRIP_REPORTS_ERROR,
    error,
    meta,
  };
};
