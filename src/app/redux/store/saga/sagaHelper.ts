import { toast } from "react-toastify";
import { call, put } from "redux-saga/effects";

/**
 * @param handler --- Error handler function. In our case, onError Function
 * @param saga --- Actual Saga function. in our case Api is called and data is returned
 * @param success --- success redux action dispatch function -- in our case, if we need to pass response coming from api to the actual calling function( something like props.viewingItem(data)), then pass it here, otherwise leave it blank
 * @
 */

export const safe = (
  handler: any = null,
  saga: any,
  success: any = null,
  ...args: any
) =>
  function* (action: any) {
    try {
      // console.log('action in safe===', action, success);
      //@ts-expect-error
      const res1 = yield call(saga, ...args, action);
      // yield call(handler, ...args,);
      // console.log('res1====', res1);

      if (success) {
        yield call(success, res1, action.type, action.meta);
        return res1;
      }
    } catch (err) {
      yield call(handler, ...args, err, action.type, action.meta);
    }
  };

export function* onSuccess(response: any, type: any, meta: any) {
  // console.log('type onSuccess', response);
  yield put({
    type: type + "_SUCCESS",
    payload: response,
    error: false,
    meta,
  });

  // response.message && AlertHelper.show("success", "Done!", response.message);
  // AlertHelper.invokeOnClose();
  // trackEvent('Error', {type: type, error: err.toString()});
  // if (err.response && err.response.data && err.response.data.message) {
  //   AlertHelper.show('error', 'Oops!', err.response.data.message);
  // } else {
  //   AlertHelper.show('error', 'Oops!', 'Something went wrong.');
  // }
  return response;
}

export function* onError(err: any, type: any, meta: any) {
  console.log("type onError", type);
  yield put({
    type: type + "_ERROR",
    payload: err,
    error: true,
    meta,
  });
  //   AlertHelper.invokeOnClose();
  //   trackEvent("Error", { type: type, error: err.toString() });
  //   if (err.response && err.response.data && err.response.data.message) {
  //     // AlertHelper.show("error", "Oops!", err.response.data.message);
  //   } else {
  //     // AlertHelper.show("error", "Oops!", "Something went wrong.");
  //   }
  if (err.status === 400) {
    toast.error("Bad Request. Please Check the data and try again.");
  } else if (err.status === 500) {
    toast.error("Server Error. Please check with administrator.");
  }
  // else if (err.response && err.response.data && err.response.data.message) {
  //   toast.error(err.response.data.message);
  //   // AlertHelper.show("error", "Oops!", err.response.data.message);
  // }
  else if (!(err.response && err.response.data && err.response.data.message)) {
    toast.error("Something went wrong. Please try again later.");
    // AlertHelper.show("error", "Oops!", "Something went wrong.");
  }

  return err;
}
