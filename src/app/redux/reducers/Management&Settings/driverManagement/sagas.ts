import { API } from "../../../../api/api.constants";
import {
  get,
  post,
  put as update,
  del,
} from "../../../../services/axios.services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_DRIVER,
  ADD_DRIVER,
  EDIT_DRIVER,
  DELETE_DRIVER,
  GET_DRIVER_FOR_PROJECT,
} from "./driverManagement.types";
import { DeleteDriverCodeSuccess } from "./driverManagement.actions";
import { onError, safe, onSuccess } from "../../../store/saga/sagaHelper";

function* getDriver({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.DRIVER_MANAGEMENT);
  return response;
}
function* getDriverForProjectSaga({ projectId, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.DRIVER_UNDER_PROJECT + "/" + projectId);
  return response;
}
function* addDriver({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(post, API.DRIVER_MANAGEMENT, { ...data });
  return response;
}
function* editDriver({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(
    update,
    `${API.DRIVER_MANAGEMENT}/${data.id}`,
    data
  );
  return response;
}
function* deleteDriver({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(del, `${API.DRIVER_MANAGEMENT}/${id}`);
  yield put(DeleteDriverCodeSuccess({ id, meta }));
}

function* driveMgMtSaga() {
  yield takeLatest(GET_DRIVER, safe(onError, getDriver, onSuccess));
  yield takeLatest(
    GET_DRIVER_FOR_PROJECT,
    safe(onError, getDriverForProjectSaga, onSuccess)
  );
  yield takeLatest(ADD_DRIVER, safe(onError, addDriver, onSuccess));
  yield takeLatest(EDIT_DRIVER, safe(onError, editDriver, onSuccess));
  yield takeLatest(DELETE_DRIVER, safe(onError, deleteDriver));
}

export default driveMgMtSaga;
