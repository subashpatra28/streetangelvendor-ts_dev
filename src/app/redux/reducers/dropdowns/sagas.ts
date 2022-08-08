import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../api/api.constants";
import { get } from "../../../services/axios.services";
import { onError, onSuccess, safe } from "../../store/saga/sagaHelper";
import {
  GET_DIAL_CODE,
  GET_ORG_LIST,
  GET_PROJECT_LIST_FROM_ORG,
  GET_RESOURCE_ROLE_LIST,
} from "./dropdown.types";

function* getDialCodeList({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.DIALCODE);
  return response;
}

function* getProjectsUnderOrgList({ id, meta }: $TSFixMe) {
  // @ts-expect-error TS(7057): 'yield' expression implicitly results in an 'any' ... Remove this comment to see the full error message
  const response = yield call(get, API.PROJECT_UNDER_ORG + "/" + id);
  return response;
}
function* getResourceRolesList({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.RESOURCE_ROLES);
  return response;
}
function* getOrganizationList({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.ORGANIZATION_MANAGEMENT);
  return response;
}

function* dropDownSaga() {
  yield takeLatest(GET_DIAL_CODE, safe(onError, getDialCodeList, onSuccess));
  yield takeLatest(
    GET_PROJECT_LIST_FROM_ORG,
    safe(onError, getProjectsUnderOrgList, onSuccess)
  );
  yield takeLatest(
    GET_RESOURCE_ROLE_LIST,
    safe(onError, getResourceRolesList, onSuccess)
  );
  yield takeLatest(GET_ORG_LIST, safe(onError, getOrganizationList, onSuccess));
}

export default dropDownSaga;
