import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../api/api.constants";
import { get } from "../../../services/axios.services";
import { onError, onSuccess, safe } from "../../store/saga/sagaHelper";
import { deleteImportDevicesCodeSuccess } from "./data.actions";
import {
  DELETE_IMPORT_DEVICES,
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

function* getSaAsEvents({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.SA_AS_EVENTS);
  return response;
}
function* getHighEvents({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.HIGH_EVENTS);
  return response;
}
function* getDeviceStatus({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.DEVICE_STATUS);
  return response;
}
function* getLowEvents({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.LOW_EVENTS);
  return response;
}

function* getRequestedVideos({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.REQUESTED_VIDEO);
  return response;
}

function* getGeoFenceEvents({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.GEO_FENCE_EVENTS);
  return response;
}

function* getPanicButtonEvents({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.PANIC_BUTTON_EVENTS);
  return response;
}

function* getDriverStatistics({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.DRIVER_STATISTICS);
  return response;
}

function* getVehicleTrips({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.VEHICLE_TRIP);
  return response;
}

function* getVideoRequestReports({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.VIDEO_REQUEST_REPORTS);
  return response;
}

function* getVehicleTripReports({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.VEHICLE_TRIP_REPORTS);
  return response;
}

function* getOrganizationReports({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.ORGANIZATION_REPORTS);
  return response;
}

function* getDeviceReports({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.DEVICE_REPORTS);
  return response;
}

function* getEventReports({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.EVENT_REPORTS);
  return response;
}

function* getFirstConnects({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.FIRST_CONNECT);
  return response;
}

function* getImportDevices({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.IMPORT_DEVICES);
  return response;
}
function* deleteImportDevices({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(del, `${API.IMPORT_DEVICES}/${id}`);
  yield put(deleteImportDevicesCodeSuccess({ id, meta }));
}

function* getEngineerServiceCalls({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.ENGINEER_SERVICE_CALLS);
  return response;
}

function* getPendingDevices({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.PENDING_DEVICES);
  return response;
}

function* getCompleted({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.COMPLETED);
  return response;
}

function* dataSaga() {
  yield takeLatest(GET_SA_AS_EVENTS, safe(onError, getSaAsEvents, onSuccess));
  yield takeLatest(GET_HIGH_EVENTS, safe(onError, getHighEvents, onSuccess));
  yield takeLatest(
    GET_DEVICE_STATUS,
    safe(onError, getDeviceStatus, onSuccess)
  );
  yield takeLatest(GET_LOW_EVENTS, safe(onError, getLowEvents, onSuccess));
  yield takeLatest(
    GET_REQUESTED_VIDEO,
    safe(onError, getRequestedVideos, onSuccess)
  );
  yield takeLatest(
    GET_GEO_FENCE_EVENTS,
    safe(onError, getGeoFenceEvents, onSuccess)
  );
  yield takeLatest(
    GET_PANIC_BUTTON_EVENTS,
    safe(onError, getPanicButtonEvents, onSuccess)
  );
  yield takeLatest(
    GET_DRIVER_STATISTICS,
    safe(onError, getDriverStatistics, onSuccess)
  );
  yield takeLatest(GET_VEHICLE_TRIP, safe(onError, getVehicleTrips, onSuccess));
  yield takeLatest(
    GET_VIDEO_REQUEST_REPORTS,
    safe(onError, getVideoRequestReports, onSuccess)
  );
  yield takeLatest(
    GET_VEHICLE_TRIP_REPORTS,
    safe(onError, getVehicleTripReports, onSuccess)
  );
  yield takeLatest(
    GET_ORGANIZATION_REPORTS,
    safe(onError, getOrganizationReports, onSuccess)
  );
  yield takeLatest(
    GET_DEVICE_REPORTS,
    safe(onError, getDeviceReports, onSuccess)
  );
  yield takeLatest(
    GET_EVENT_REPORTS,
    safe(onError, getEventReports, onSuccess)
  );
  yield takeLatest(
    GET_FIRST_CONNECTS,
    safe(onError, getFirstConnects, onSuccess)
  );
  yield takeLatest(
    GET_IMPORT_DEVICES,
    safe(onError, getImportDevices, onSuccess)
  );
  yield takeLatest(DELETE_IMPORT_DEVICES, safe(onError, deleteImportDevices));
  yield takeLatest(
    GET_ENGINEER_SERVICE_CALLS,
    safe(onError, getEngineerServiceCalls, onSuccess)
  );
  yield takeLatest(
    GET_PENDING_DEVICES,
    safe(onError, getPendingDevices, onSuccess)
  );
  yield takeLatest(GET_COMPLETED, safe(onError, getCompleted, onSuccess));
}

export default dataSaga;
