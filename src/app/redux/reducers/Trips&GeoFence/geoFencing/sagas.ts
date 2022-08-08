import { call, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import { get, post } from "../../../../services/axios.services";
import { onError, onSuccess, safe } from "../../../store/saga/sagaHelper";
import { ADD_GEO_FENCING, GET_GEO_FENCING } from "./geoFencing.types";

function* getGeoFencing({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.GEO_FENCING);
  return response;
}

function* AddGeoFencingSaga({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(post, API.GEO_FENCING, data);
  return response;
}
function* geoFencingSaga() {
  yield takeLatest(GET_GEO_FENCING, safe(onError, getGeoFencing, onSuccess));
  yield takeLatest(
    ADD_GEO_FENCING,
    safe(onError, AddGeoFencingSaga, onSuccess)
  );
}
export default geoFencingSaga;
