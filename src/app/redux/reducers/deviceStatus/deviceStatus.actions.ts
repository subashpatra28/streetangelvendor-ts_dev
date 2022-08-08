import {
  GET_DEVICE_STATUS_SUCCESS,
  GET_DEVICE_STATUS_ERROR,
  GET_DEVICE_STATUS,
} from "./deviceStatus.types";

export const getDeviceStatus = () => {
  console.log("get DeviceStatus received");
  return {
    type: GET_DEVICE_STATUS,
    meta: { thunk: true },
  };
};
export const getDeviceStatusSuccess = ({
  data,
  meta
}: $TSFixMe) => {
  return {
    type: GET_DEVICE_STATUS_SUCCESS,
    data,
    meta,
  };
};
export const getDeviceStatusError = ({
  error,
  meta
}: $TSFixMe) => {
  return {
    type: GET_DEVICE_STATUS_ERROR,
    error,
    meta,
  };
};
