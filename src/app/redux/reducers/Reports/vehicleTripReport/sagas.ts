import { call, put, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import { get } from "../../../../services/axios.services";
import { onError, safe } from "../../../store/saga/sagaHelper";
import { getVehicleTripReportsSuccess } from "./vehicleTripReports.actions";
import { GET_VEHICLE_TRIP_REPORTS } from "./vehicleTripReports.types";

function* getVehicleTripReports({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.VEHICLE_TRIP_REPORTS);
  yield put(getVehicleTripReportsSuccess({ data: response, meta }));
}

function* vehicleTripReportsSaga() {
  yield takeLatest(
    GET_VEHICLE_TRIP_REPORTS,
    safe(onError, getVehicleTripReports)
  );
}

export default vehicleTripReportsSaga;
