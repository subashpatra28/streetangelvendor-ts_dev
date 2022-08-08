import { API } from "../../../../api/api.constants";
import {
  get,
  post,
  put as update,
  del,
} from "../../../../services/axios.services";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_MANAGE_ROLES,
  ADD_MANAGE_ROLES,
  EDIT_MANAGE_ROLES,
  DELETE_MANAGE_ROLES,
} from "./manageRoles.types";
import { DeleteManageRolesCodeSuccess } from "./manageRoles.actions";
import { onError, safe, onSuccess } from "../../../store/saga/sagaHelper";

function* getManageRoles({ meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.MANAGEMENT_ROLE);
  return response;
}
function* addManageRoles({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(post, API.MANAGEMENT_ROLE, { ...data });
  return response;
}
function* editManageRoles({ data, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(
    update,
    `${API.MANAGEMENT_ROLE}/${data.id}`,
    data
  );
  return response;
}
function* deleteManageRoles({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(del, `${API.MANAGEMENT_ROLE}/${id}`);
  yield put(DeleteManageRolesCodeSuccess({ id, meta }));
}
// function* getResourceRole({ meta }) {
//   const response = yield call(get, API.RESOURCE_ROLES);
//   yield put(getResourceRoleSuccess({ response, meta }));
// }

function* mgmtRolesSaga() {
  yield takeLatest(GET_MANAGE_ROLES, safe(onError, getManageRoles, onSuccess));
  yield takeLatest(ADD_MANAGE_ROLES, safe(onError, addManageRoles, onSuccess));
  yield takeLatest(
    EDIT_MANAGE_ROLES,
    safe(onError, editManageRoles, onSuccess)
  );
  yield takeLatest(DELETE_MANAGE_ROLES, safe(onError, deleteManageRoles));
}

export default mgmtRolesSaga;
