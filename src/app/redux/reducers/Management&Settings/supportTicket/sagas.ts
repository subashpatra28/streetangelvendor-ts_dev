import { call, takeLatest } from "redux-saga/effects";
import { API } from "../../../../api/api.constants";
import { get, post } from "../../../../services/axios.services";
import { onError, onSuccess, safe } from "../../../store/saga/sagaHelper";
import { ADD_SUPPORT_TICKET, GET_SUPPORT_TICKET } from "./supportTicket.types";

function* getSupportTicket({ meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(get, API.SUPPORT_TICKET);
  return response;
}
function* addSupportTicket({ data, meta }: $TSFixMe) {
  //@ts-expect-error
  const response = yield call(post, API.SUPPORT_TICKET, { ...data });
  return response;
}
function* supportTicketSaga() {
  yield takeLatest(
    GET_SUPPORT_TICKET,
    safe(onError, getSupportTicket, onSuccess)
  );
  yield takeLatest(
    ADD_SUPPORT_TICKET,
    safe(onError, addSupportTicket, onSuccess)
  );
}

export default supportTicketSaga;
