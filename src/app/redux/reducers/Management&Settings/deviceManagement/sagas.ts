import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import {
  del,
  get,
  post,
  put as update,
} from "../../../../services/axios.services";
import { onError, safe, onSuccess } from "../../../store/saga/sagaHelper";
import { DeleteDeviceCodeSuccess } from "./deviceManagement.actions";
import {
  ADD_DEVICE,
  ADD_PART_INFO,
  DELETE_DEVICE,
  EDIT_DEVICE,
  EDIT_PART_INFO,
  EDIT_RENAME_CHANNEL,
  GET_DEVICE,
  GET_PART_INFO,
  GET_RENAME_CHANNEL,
} from "./deviceManagement.types";

function* getDevice({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.DEVICE_MANAGEMENT);
  return response;
}

function* addDevice({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(post, API.DEVICE_MANAGEMENT, { ...data });
  return response;
}

function* editDevice({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(
    update,
    `${API.DEVICE_MANAGEMENT}/${data.id}`,
    data
  );
  return response;
}

function* deleteDevice({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(del, `${API.DEVICE_MANAGEMENT}/${id}`);
  yield put(DeleteDeviceCodeSuccess({ id, meta }));
}
function* getRenameChannel({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, `${API.CAMERA_INFO}/${data}`);
  // yield put(getRenameChannelSuccess({ data: response.result, meta }));
  return response;
}

function* editRenameChannel({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(update, `${API.CAMERA_INFO}/${data.id}`, data);
  // yield put(EditRenameChannelSuccess({ data: response, meta }));
  return response;
}

function* getPartInfo({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, `${API.PART_INFO}/device/${id}`);
  // yield put(getPartInfoSuccess({ data: response.result, meta }));
  return response;
}

function* editPartInfo({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(update, `${API.PART_INFO}/${data.id}`, data);
  // yield put(EditPartInfoSuccess({ data: response, meta }));
  return response;
}

function* addPartInfo({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(post, API.PART_INFO, { ...data });
  // yield put(AddPartInfoSuccess({ data: response, meta }));
  return response;
}

function* deviceManagementSaga() {
  yield takeLatest(GET_DEVICE, safe(onError, getDevice, onSuccess));
  yield takeLatest(ADD_DEVICE, safe(onError, addDevice, onSuccess));
  yield takeLatest(EDIT_DEVICE, safe(onError, editDevice, onSuccess));
  yield takeLatest(DELETE_DEVICE, safe(onError, deleteDevice));
  yield takeLatest(
    GET_RENAME_CHANNEL,
    safe(onError, getRenameChannel, onSuccess)
  );
  yield takeLatest(
    EDIT_RENAME_CHANNEL,
    safe(onError, editRenameChannel, onSuccess)
  );
  yield takeLatest(GET_PART_INFO, safe(onError, getPartInfo, onSuccess));
  yield takeLatest(EDIT_PART_INFO, safe(onError, editPartInfo, onSuccess));
  yield takeLatest(ADD_PART_INFO, safe(onError, addPartInfo, onSuccess));
}

export default deviceManagementSaga;
