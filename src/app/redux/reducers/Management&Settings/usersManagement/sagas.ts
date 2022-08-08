import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import {
  del,
  get,
  post,
  put as update,
} from "../../../../services/axios.services";
import { onError, safe, onSuccess } from "../../../store/saga/sagaHelper";
import { DeleteUsersCodeSuccess } from "./usersManagement.actions";
import {
  ADD_USERS,
  DELETE_USERS,
  EDIT_USERS,
  GET_USERS,
} from "./usersManagement.types";

function* getUsers({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.USERS_MANAGEMENT);
  return response;
}
function* addUsers({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(post, API.USERS_MANAGEMENT, { ...data });
  return response;
}
function* editUsers({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(
    update,
    `${API.USERS_MANAGEMENT}/${data.id}`,
    data
  );
  return response;
}
function* deleteUsers({ id, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(del, `${API.USERS_MANAGEMENT}/${id}`);
  yield put(DeleteUsersCodeSuccess({ id: id, meta }));
}

function* userMgMtSaga() {
  yield takeLatest(GET_USERS, safe(onError, getUsers, onSuccess));
  yield takeLatest(ADD_USERS, safe(onError, addUsers, onSuccess));
  yield takeLatest(EDIT_USERS, safe(onError, editUsers, onSuccess));
  yield takeLatest(DELETE_USERS, safe(onError, deleteUsers));
}

export default userMgMtSaga;
