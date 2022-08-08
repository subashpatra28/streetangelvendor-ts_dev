import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import {
  del,
  get,
  post,
  put as update,
} from "../../../../services/axios.services";
import { onError, onSuccess, safe } from "../../../store/saga/sagaHelper";
import { DeleteCommonConfigurationCodeSuccess } from "./commonConfiguration.actions";
import {
  ADD_COMMON_CONFIGURATION,
  DELETE_COMMON_CONFIGURATION,
  EDIT_COMMON_CONFIGURATION,
  GET_COMMON_CONFIGURATION,
} from "./commonConfiguration.types";

function* getCommonConfiguration({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.COMMON_CONFIGURATION);
  return response;
}

function* addCommonConfiguration({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(post, API.COMMON_CONFIGURATION, { ...data });
  return response;
}

function* editCommonConfiguration({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(
    update,
    `${API.COMMON_CONFIGURATION}/${data.id}`,
    data
  );
  return response;
}

function* deleteCommonConfiguration({ id, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(del, `/common-configuration/${id}`);
  yield put(DeleteCommonConfigurationCodeSuccess({ id, meta }));
}

function* commonConfigurationSaga() {
  yield takeLatest(
    GET_COMMON_CONFIGURATION,
    safe(onError, getCommonConfiguration, onSuccess)
  );
  yield takeLatest(
    ADD_COMMON_CONFIGURATION,
    safe(onError, addCommonConfiguration, onSuccess)
  );
  yield takeLatest(
    EDIT_COMMON_CONFIGURATION,
    safe(onError, editCommonConfiguration, onSuccess)
  );
  yield takeLatest(
    DELETE_COMMON_CONFIGURATION,
    safe(onError, deleteCommonConfiguration)
  );
}

export default commonConfigurationSaga;
