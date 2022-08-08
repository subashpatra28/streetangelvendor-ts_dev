import {
  GetCompletedResp,
  GetDeviceReportResp,
  GetDeviceStatusResp,
  GetDriverStatisticsResp,
  GetEngineerServiceCallsResp,
  GetEventReportResp,
  GetFirstConnectResp,
  GetGeoFenceEventsResp,
  GetHighEventsResp,
  GetImportDevicesResp,
  GetLowEventsResp,
  GetOrganizationReportsResp,
  GetPanicButtonEventsResp,
  GetPendingDevicesResp,
  GetRequestedVideoResp,
  GetSaaSEventResp,
  GetVehicleTripResp,
  GetVideoRequestReportsResp,
} from "../../../../global.types";
import { AppActions } from "../../store/globalstore";
import {
  DELETE_IMPORT_DEVICES_SUCCESS,
  GET_COMPLETED_SUCCESS,
  GET_DEVICE_REPORTS_SUCCESS,
  GET_DEVICE_STATUS_SUCCESS,
  GET_DRIVER_STATISTICS_SUCCESS,
  GET_ENGINEER_SERVICE_CALLS_SUCCESS,
  GET_EVENT_REPORTS_SUCCESS,
  GET_FIRST_CONNECTS_SUCCESS,
  GET_GEO_FENCE_EVENTS_SUCCESS,
  GET_HIGH_EVENTS_SUCCESS,
  GET_IMPORT_DEVICES_SUCCESS,
  GET_LOW_EVENTS_SUCCESS,
  GET_ORGANIZATION_REPORTS_SUCCESS,
  GET_PANIC_BUTTON_EVENTS_SUCCESS,
  GET_PENDING_DEVICES_SUCCESS,
  GET_REQUESTED_VIDEO_SUCCESS,
  GET_SA_AS_EVENTS_SUCCESS,
  GET_VEHICLE_TRIP_REPORTS_SUCCESS,
  GET_VEHICLE_TRIP_SUCCESS,
  GET_VIDEO_REQUEST_REPORTS_SUCCESS,
} from "./data.types";

interface InitialState {
  saAsEvents: Partial<GetSaaSEventResp>;
  highEvents: Partial<GetHighEventsResp>;
  deviceStatus: Partial<GetDeviceStatusResp>;
  geoFenceEvents: Partial<GetGeoFenceEventsResp>;
  pendingDevices: Partial<GetPendingDevicesResp>;
  vehicleTrips: Partial<GetVehicleTripResp>;
  panicButtonEvents: Partial<GetPanicButtonEventsResp>;
  videoRequestReports: Partial<GetVideoRequestReportsResp>;
  requestedVideos: Partial<GetRequestedVideoResp>;
  firstConnects: Partial<GetFirstConnectResp>;
  lowEvents: Partial<GetLowEventsResp>;
  driverStatistics: Partial<GetDriverStatisticsResp>;
  completed: Partial<GetCompletedResp>;
  eventReports: Partial<GetEventReportResp>;
  organizationReports: Partial<GetOrganizationReportsResp>;
  engineerServiceCalls: Partial<GetEngineerServiceCallsResp>;
  importDevices: Partial<GetImportDevicesResp>;
  deviceReports: Partial<GetDeviceReportResp>;

  chatData: { value: string; sent: string }[];
}

// initial State
const initialState: InitialState = {
  saAsEvents: {},
  highEvents: {},
  deviceStatus: {},
  vehicleTrips: {},
  videoRequestReports: {},
  firstConnects: {},
  pendingDevices: {},
  geoFenceEvents: {},
  panicButtonEvents: {},
  requestedVideos: {},
  deviceReports: {},
  engineerServiceCalls: {},
  driverStatistics: {},
  lowEvents: {},
  eventReports: {},
  organizationReports: {},
  completed: {},
  importDevices: {},
  chatData: [
    { value: "Test", sent: "user" },
    { value: "Demo", sent: "client" },
    { value: "Test", sent: "user" },
    { value: "Demo", sent: "client" },
  ],
};

export const dataReducer = (
  state: InitialState = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_SA_AS_EVENTS_SUCCESS:
      return {
        ...state,
        saAsEvents: action.payload,
      };

    case GET_HIGH_EVENTS_SUCCESS:
      return {
        ...state,
        highEvents: action.payload,
      };
    case GET_DEVICE_STATUS_SUCCESS:
      return {
        ...state,
        deviceStatus: action.payload,
      };
    case GET_LOW_EVENTS_SUCCESS:
      return {
        ...state,
        lowEvents: action.payload,
      };
    case GET_REQUESTED_VIDEO_SUCCESS:
      return {
        ...state,
        requestedVideos: action.payload,
      };
    case GET_GEO_FENCE_EVENTS_SUCCESS:
      return {
        ...state,
        geoFenceEvents: action.payload,
      };
    case GET_PANIC_BUTTON_EVENTS_SUCCESS:
      return {
        ...state,
        panicButtonEvents: action.payload,
      };
    case GET_DRIVER_STATISTICS_SUCCESS:
      return {
        ...state,
        driverStatistics: action.payload,
      };
    case GET_VEHICLE_TRIP_SUCCESS:
      return {
        ...state,
        vehicleTrips: action.payload,
      };
    case GET_VIDEO_REQUEST_REPORTS_SUCCESS:
      return {
        ...state,
        videoRequestReports: action.payload,
      };
    case GET_VEHICLE_TRIP_REPORTS_SUCCESS:
      return {
        ...state,
        vehicleTriReports: action.payload,
      };
    case GET_ORGANIZATION_REPORTS_SUCCESS:
      return {
        ...state,
        organizationReports: action.payload,
      };
    case GET_DEVICE_REPORTS_SUCCESS:
      return {
        ...state,
        deviceReports: action.payload,
      };
    case GET_EVENT_REPORTS_SUCCESS:
      return {
        ...state,
        eventReports: action.payload,
      };
    case GET_FIRST_CONNECTS_SUCCESS:
      return {
        ...state,
        firstConnects: action.payload,
      };
    case GET_IMPORT_DEVICES_SUCCESS:
      return {
        ...state,
        importDevices: action.payload,
      };
    case DELETE_IMPORT_DEVICES_SUCCESS:
      return {
        ...state,
        importDevices: {
          ...state.importDevices,
          result: state.importDevices.result?.filter(
            (each) => each.id !== action.id
          ),
        },
      };
    case GET_ENGINEER_SERVICE_CALLS_SUCCESS:
      return {
        ...state,
        engineerServiceCalls: action.payload,
      };
    case GET_PENDING_DEVICES_SUCCESS:
      return {
        ...state,
        pendingDevices: action.payload,
      };
    case GET_COMPLETED_SUCCESS:
      return {
        ...state,
        completed: action.payload,
      };
    default:
      return state;
  }
};
