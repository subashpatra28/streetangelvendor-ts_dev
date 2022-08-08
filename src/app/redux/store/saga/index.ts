// RootSaga will go here.
import { all, fork } from "redux-saga/effects";
import dataSaga from "../../reducers/DataReducer/sagas";
import dropDownSaga from "../../reducers/dropdowns/sagas";
import commonConfigurationSaga from "../../reducers/Management&Settings/commonConfiguration/sagas";
import deviceManagementSaga from "../../reducers/Management&Settings/deviceManagement/sagas";
import driveMgMtSaga from "../../reducers/Management&Settings/driverManagement/sagas";
import mgmtRolesSaga from "../../reducers/Management&Settings/manageRoles/sagas";
import projectMgMtSaga from "../../reducers/Management&Settings/projectManagement/sagas";
import supportTicketSaga from "../../reducers/Management&Settings/supportTicket/sagas";
import userMgMtSaga from "../../reducers/Management&Settings/usersManagement/sagas";
import geoFencingSaga from "../../reducers/Trips&GeoFence/geoFencing/sagas";

export default function* rootSaga() {
  yield all([fork(dropDownSaga)]);
  yield all([fork(driveMgMtSaga)]);
  yield all([fork(mgmtRolesSaga)]);
  yield all([fork(deviceManagementSaga)]);
  yield all([fork(dataSaga)]);
  yield all([fork(projectMgMtSaga)]);
  yield all([fork(userMgMtSaga)]);
  yield all([fork(supportTicketSaga)]);
  // yield all([fork(highEventsSaga)]);
  // yield all([fork(lowEventsSaga)]);
  // yield all([fork(requestedVideoSaga)]);
  // yield all([fork(geoFenceEventsSaga)]);
  // yield all([fork(panicButtonEventsSaga)]);
  // yield all([fork(driverStatisticsSaga)]);
  // yield all([fork(vehicleTripsSaga)]);
  yield all([fork(geoFencingSaga)]);
  // yield all([fork(deviceReportsSaga)]);
  // yield all([fork(organizationReportsSaga)]);
  // yield all([fork(vehicleTripReportsSaga)]);
  // yield all([fork(videoRequestReportsSaga)]);
  // yield all([fork(eventReportsSaga)]);
  // yield all([fork(deviceStatusSaga)]);
  yield all([fork(commonConfigurationSaga)]);
}
