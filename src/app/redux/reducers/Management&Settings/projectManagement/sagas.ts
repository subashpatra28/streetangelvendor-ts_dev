import moment from "moment";
import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import {
  del,
  get,
  post,
  put as update,
} from "../../../../services/axios.services";
import { onError, onSuccess, safe } from "../../../store/saga/sagaHelper";
import { DeleteProjectCodeSuccess } from "./projectManagement.actions";
import {
  ADD_PROJECT_MGMT,
  DELETE_PROJECT_MGMT,
  EDIT_PROJECT_MGMT,
  GET_PROJECT,
  GET_PROJECT_MGMT,
} from "./projectManagement.types";

function* getProject({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.PROJECT_API);
  return response;
}
function* getProjectMgmt({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.PROJECT_MANAGEMENT);
  return response;
}
function* addProject({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(post, API.PROJECT_MANAGEMENT, {
    ...data,
    userName: "viral patel1" + new Date().getTime(),
    password: "123456789",
    website: "http://viral.com",
    renewalDate: moment("2025-05-01", "YYYY-MM-DD"),
  });
  return response;
}
function* editProject({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(update, `${API.PROJECT_MANAGEMENT}/${data.id}`, {
    ...data,
    userName: "viral patel1" + new Date().getTime(),
    password: "123456789",
    website: "http://viral.com",
    renewalDate: moment("2025-05-01", "YYYY-MM-DD"),
  });
  return response;
}
function* deleteProject({ id, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(del, `${API.PROJECT_MANAGEMENT}/${id}`);
  yield put(DeleteProjectCodeSuccess({ id, meta }));
}

function* projectMgMtSaga() {
  yield takeLatest(GET_PROJECT, safe(onError, getProject, onSuccess));
  yield takeLatest(GET_PROJECT_MGMT, safe(onError, getProjectMgmt, onSuccess));
  yield takeLatest(ADD_PROJECT_MGMT, safe(onError, addProject, onSuccess));
  yield takeLatest(EDIT_PROJECT_MGMT, safe(onError, editProject, onSuccess));
  yield takeLatest(DELETE_PROJECT_MGMT, safe(onError, deleteProject));
}

export default projectMgMtSaga;
