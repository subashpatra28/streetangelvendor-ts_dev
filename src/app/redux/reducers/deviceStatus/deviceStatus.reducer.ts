import {
  GET_DEVICE_STATUS_SUCCESS,
  GET_DEVICE_STATUS_ERROR,
} from "./deviceStatus.types";

const initialState = {
  deviceStatus: {},
};

export const deviceStatusReducer = (state = initialState, action: $TSFixMe) => {
  switch (action.type) {
    case GET_DEVICE_STATUS_SUCCESS:
      return {
        ...state,
        deviceStatus: action.data,
      };
    case GET_DEVICE_STATUS_ERROR:
      return {
        ...state,
        deviceStatus: action.error,
      };

    default:
      return state;
  }
};
