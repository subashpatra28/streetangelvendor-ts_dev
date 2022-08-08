import {
  DELETE_IMPORT_DEVICES,
  DELETE_IMPORT_DEVICES_SUCCESS,
  GET_CHAT_DATA,
  GET_COMPLETED,
  GET_DEVICE_REPORTS,
  GET_DEVICE_STATUS,
  GET_DRIVER_STATISTICS,
  GET_ENGINEER_SERVICE_CALLS,
  GET_EVENT_REPORTS,
  GET_FIRST_CONNECTS,
  GET_GEO_FENCE_EVENTS,
  GET_HIGH_EVENTS,
  GET_IMPORT_DEVICES,
  GET_LOW_EVENTS,
  GET_ORGANIZATION_REPORTS,
  GET_PANIC_BUTTON_EVENTS,
  GET_PENDING_DEVICES,
  GET_REQUESTED_VIDEO,
  GET_SA_AS_EVENTS,
  GET_VEHICLE_TRIP,
  GET_VEHICLE_TRIP_REPORTS,
  GET_VIDEO_REQUEST_REPORTS,
} from "./data.types";

export const getSaAsEvents = () => {
  console.log("get saAsEvents received");
  return {
    type: GET_SA_AS_EVENTS as typeof GET_SA_AS_EVENTS,
    meta: { thunk: true },
  };
};

export const getHighEvents = () => {
  console.log("get highEvents received");
  return {
    type: GET_HIGH_EVENTS as typeof GET_HIGH_EVENTS,
    meta: { thunk: true },
  };
};
export const getDeviceStatus = () => {
  console.log("get DeviceStatus received");
  return {
    type: GET_DEVICE_STATUS as typeof GET_DEVICE_STATUS,
    meta: { thunk: true },
  };
};

export const addChatdata = (msg: $TSFixMe) => {
  return {
    type: GET_CHAT_DATA as typeof GET_CHAT_DATA,
    payload: msg,
  };
};

export const getLowEvents = () => {
  console.log("get lowevents received");
  return {
    type: GET_LOW_EVENTS as typeof GET_LOW_EVENTS,
    meta: { thunk: true },
  };
};

export const getRequestedVideo = () => {
  console.log("get requestedVideo received");
  return {
    type: GET_REQUESTED_VIDEO as typeof GET_REQUESTED_VIDEO,
    meta: { thunk: true },
  };
};

export const getGeoFenceEvents = () => {
  console.log("get geoFenceEvents received");
  return {
    type: GET_GEO_FENCE_EVENTS as typeof GET_GEO_FENCE_EVENTS,
    meta: { thunk: true },
  };
};

export const getPanicButtonEvents = () => {
  console.log("get panicButtonEvents received");
  return {
    type: GET_PANIC_BUTTON_EVENTS as typeof GET_PANIC_BUTTON_EVENTS,
    meta: { thunk: true },
  };
};
export const getDriverStatistics = () => {
  console.log("get driver received");
  return {
    type: GET_DRIVER_STATISTICS as typeof GET_DRIVER_STATISTICS,
    meta: {
      thunk: true,
    },
  };
};
export const getVehicleTrips = () => {
  console.log("get VehicleTrips received");
  return {
    type: GET_VEHICLE_TRIP as typeof GET_VEHICLE_TRIP,
    meta: { thunk: true },
  };
};

export const getVideoRequestReports = () => {
  console.log("get VideoRequestReports received");
  return {
    type: GET_VIDEO_REQUEST_REPORTS as typeof GET_VIDEO_REQUEST_REPORTS,
    meta: { thunk: true },
  };
};

export const getVehicleTripReports = () => {
  console.log("get VehicleTripReports received");
  return {
    type: GET_VEHICLE_TRIP_REPORTS as typeof GET_VEHICLE_TRIP_REPORTS,
    meta: { thunk: true },
  };
};

export const getOrganizationReports = () => {
  console.log("get OrganizationReports received");
  return {
    type: GET_ORGANIZATION_REPORTS as typeof GET_ORGANIZATION_REPORTS,
    meta: { thunk: true },
  };
};

export const getDeviceReports = () => {
  console.log("get DeviceReports received");
  return {
    type: GET_DEVICE_REPORTS as typeof GET_DEVICE_REPORTS,
    meta: { thunk: true },
  };
};

export const getEventReports = () => {
  console.log("get eventReports received");
  return {
    type: GET_EVENT_REPORTS as typeof GET_EVENT_REPORTS,
    meta: { thunk: true },
  };
};

export const getFirstConnects = () => {
  console.log("get firstConnects received");
  return {
    type: GET_FIRST_CONNECTS as typeof GET_FIRST_CONNECTS,
    meta: { thunk: true },
  };
};

export const getImportDevices = () => {
  console.log("get ImportDevices received");
  return {
    type: GET_IMPORT_DEVICES as typeof GET_IMPORT_DEVICES,
    meta: { thunk: true },
  };
};

export const deleteImportDevicesCode = (id: number) => {
  return {
    type: DELETE_IMPORT_DEVICES as typeof DELETE_IMPORT_DEVICES,
    id,
    meta: {
      thunk: true,
    },
  };
};

export const deleteImportDevicesCodeSuccess = ({ id, meta }: $TSFixMe) => {
  return {
    type: DELETE_IMPORT_DEVICES_SUCCESS as typeof DELETE_IMPORT_DEVICES_SUCCESS,
    id,
    meta,
  };
};

export const getEngineerServiceCalls = () => {
  console.log("get EngineerServiceCalls received");
  return {
    type: GET_ENGINEER_SERVICE_CALLS as typeof GET_ENGINEER_SERVICE_CALLS,
    meta: { thunk: true },
  };
};

export const getPendingDevices = () => {
  console.log("get PendingDevices received");
  return {
    type: GET_PENDING_DEVICES as typeof GET_PENDING_DEVICES,
    meta: { thunk: true },
  };
};

export const getCompleted = () => {
  console.log("get Completed received");
  return {
    type: GET_COMPLETED as typeof GET_COMPLETED,
    meta: { thunk: true },
  };
};
