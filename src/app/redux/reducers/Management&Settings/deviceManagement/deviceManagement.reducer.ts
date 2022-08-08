import {
  GetPartInfoResp,
  IDeviceList,
  RenameChannelResp,
} from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  GET_DEVICE_SUCCESS,
  ADD_DEVICE_SUCCESS,
  EDIT_DEVICE_SUCCESS,
  DELETE_DEVICE_SUCCESS,
  GET_RENAME_CHANNEL_SUCCESS,
  EDIT_RENAME_CHANNEL_SUCCESS,
  GET_PART_INFO_SUCCESS,
  EDIT_PART_INFO_SUCCESS,
  ADD_PART_INFO_SUCCESS,
} from "./deviceManagement.types";

interface InitialState {
  devices: Partial<IDeviceList>;
  cameraInfo: Partial<RenameChannelResp>;
  partInfo: Partial<GetPartInfoResp>;
}
// initial State
const initialState: InitialState = {
  devices: {},
  cameraInfo: {},
  partInfo: {},
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const devicesReducer = (
  state: InitialState = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_DEVICE_SUCCESS:
      //   Login  user goes here

      return {
        ...state,
        devices: action.payload,
      };
    case ADD_DEVICE_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        devices: {
          ...state.devices,
          result: state.devices.result
            ? [...state.devices.result, action.payload.result]
            : [action.payload.result],
        },
      };

    case EDIT_DEVICE_SUCCESS:
      let tempArray2 = { ...state.devices };
      if (tempArray2?.result?.length) {
        for (let i = 0; i < (state.devices?.result?.length ?? 0); i++) {
          if (tempArray2.result[i].id === action.payload.result.id) {
            tempArray2.result[i] = action.payload.result;
            break;
          }
        }
      }

      return {
        ...state,
        devices: tempArray2,
      };

    case DELETE_DEVICE_SUCCESS:
      console.log(action, "deviceSuccess");
      let tempArray1 = state.devices.result ? [...state.devices.result] : [];
      tempArray1 = tempArray1.filter((item) => item.id !== action.id);

      return {
        ...state,
        devices: { ...state.devices, result: tempArray1 },
      };
    case GET_RENAME_CHANNEL_SUCCESS:
      console.log("rename", action);
      let tempArray5 = [...(state.devices.result ?? [])];
      for (let item of tempArray5) {
        if (item.id === action.payload.result.id) {
          item = { ...item, ...action.payload.result };
          break;
        }
      }
      return {
        ...state,
        // devices: { ...state.devices, result: tempArray5 },
        cameraInfo: action.payload,
      };

    case EDIT_RENAME_CHANNEL_SUCCESS:
      console.log("rename", action);
      let tempArray6 = { ...state.devices };
      for (let item of tempArray6?.result ?? []) {
        if (item.id === action.payload.result.id) {
          item = { ...item, ...action.payload.result };
          break;
        }
      }
      return {
        ...state,
        devices: tempArray6,
        cameraInfo: action.payload,
      };

    case GET_PART_INFO_SUCCESS:
      return {
        ...state,
        partInfo: action.payload,
      };

    case EDIT_PART_INFO_SUCCESS:
      // let tempArray3 = state.partInfo.result ? [...state.partInfo.result] : [];
      // for (let item of tempArray3) {
      //   if (item.id === action.payload.result.id) {
      //     item = action.payload.result;
      //     break;
      //   }
      // }
      let tempArray3 = { ...state.partInfo };
      if (tempArray3?.result?.length) {
        for (let i = 0; i < (state.partInfo?.result?.length ?? 0); i++) {
          if (tempArray3.result[i].id === action.payload.result.id) {
            tempArray3.result[i] = action.payload.result;
            break;
          }
        }
      }

      return {
        ...state,
        partInfo: { ...tempArray3 },
      };

    case ADD_PART_INFO_SUCCESS:
      return {
        ...state,
        partInfo: {
          ...state.partInfo,
          result: [...(state.partInfo.result ?? []), action.payload.result],
        },
      };
    default:
      return state;
  }
};
