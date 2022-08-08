import axios from "axios";
import { API, BASEURL } from "./api.constants";

const dialCodeApi = () => {
  return axios.get(BASEURL + API.DIALCODE);
};
// Management & Settings
const management_role = () => {
  return axios.get(BASEURL + API.MANAGEMENT_ROLE);
};

const users_management = () => {
  return axios.get(BASEURL + API.USERS_MANAGEMENT);
};

const project_management = () => {
  return axios.get(BASEURL + API.PROJECT_MANAGEMENT);
};

const support_ticket = () => {
  return axios.get(BASEURL + API.SUPPORT_TICKET);
};

const driver_management = () => {
  return axios.get(BASEURL + API.DRIVER_MANAGEMENT);
};

const device_management = () => {
  return axios.get(BASEURL + API.DEVICE_MANAGEMENT);
};
const common_configuration = () => {
  return axios.get(BASEURL + API.COMMON_CONFIGURATION);
}
// Events & Videos

const sa_as_events = () => {
  return axios.get(BASEURL + API.SA_AS_EVENTS)
}

const high_events = () => {
  return axios.get(BASEURL + API.HIGH_EVENTS)
}

const low_events = () => {
  return axios.get(BASEURL + API.LOW_EVENTS)
}

const requested_video = () => {
  return axios.get(BASEURL + API.REQUESTED_VIDEO)
};

const geo_fence_events = () => {
  return axios.get(BASEURL + API.GEO_FENCE_EVENTS)
};

const panic_button_events = () => {
  return axios.get(BASEURL + API.PANIC_BUTTON_EVENTS)
};
// DriverStatistics
const driver_statistics = () => {
  return axios.get(BASEURL + API.DRIVER_MANAGEMENT);
}
// Trips & Geo-fence
const vehicle_trip = () => {
  return axios.get(BASEURL + API.VEHICLE_TRIP);
};
const geo_fencing = () => {
  return axios.get(BASEURL + API.GEO_FENCING);
}
// Reports
const event_reports = () => {
  return axios.get(BASEURL + API.EVENT_REPORTS);
};
const video_request_reports = () => {
  return axios.get(BASEURL + API.VIDEO_REQUEST_REPORTS);
};
const device_reports = () => {
  return axios.get(BASEURL + API.DEVICE_REPORTS);
};
const organization_reports = () => {
  return axios.get(BASEURL + API.ORGANIZATION_REPORTS);
};
const vehicle_trip_reports = () => {
  return axios.get(BASEURL + API.VEHICLE_TRIP_REPORTS);
};
//All Devices
const device_status = () => {
  return axios.get(BASEURL + API.DEVICE_STATUS);
};


export {
  dialCodeApi,
  project_management,
  device_management,
  driver_management,
  management_role,
  users_management,
  common_configuration,
  support_ticket,
  sa_as_events,
  high_events,
  low_events,
  requested_video,
  geo_fence_events,
  panic_button_events,
  driver_statistics,
  vehicle_trip,
  geo_fencing,
  event_reports,
  video_request_reports,
  device_reports,
  organization_reports,
  vehicle_trip_reports,
  device_status,
};
