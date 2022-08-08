import {
  GET_VEHICLE_TRIP_REPORTS_SUCCESS,
  GET_VEHICLE_TRIP_REPORTS_ERROR,
} from "./vehicleTripReports.types";

const initialState = {
  vehicleTriReports: {},
};

export const vehicleTripReportReducer = (state = initialState, action: $TSFixMe) => {
  switch (action.type) {
    case GET_VEHICLE_TRIP_REPORTS_SUCCESS:
      //   Login  user goes here

      return {
        ...state,
        vehicleTriReports: action.data,
      };
    case GET_VEHICLE_TRIP_REPORTS_ERROR:
      //   Logout user goes here
      return {
        ...state,
        vehicleTriReports: action.error,
      };
    default:
      return state;
  }
};
