import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../api/api.constants";
import { get } from "../../../services/axios.services";
import { onError, safe } from "../../store/saga/sagaHelper";
import { getDeviceStatusSuccess } from "./deviceStatus.actions";
import { GET_DEVICE_STATUS } from "./deviceStatus.types";

function* getDeviceStatus({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.DEVICE_STATUS);
  yield put(getDeviceStatusSuccess({ data: response, meta }));
}
function* deviceStatusSaga() {
  yield takeLatest(GET_DEVICE_STATUS, safe(onError, getDeviceStatus));
}
export default deviceStatusSaga;
