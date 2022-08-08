import { IDriverList } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  GET_DRIVER_SUCCESS,
  GET_DRIVER_ERROR,
  ADD_DRIVER_SUCCESS,
  ADD_DRIVER_ERROR,
  EDIT_DRIVER_SUCCESS,
  EDIT_DRIVER_ERROR,
  DELETE_DRIVER_SUCCESS,
  DELETE_DRIVER_ERROR,
  GET_DRIVER_FOR_PROJECT_SUCCESS,
} from "./driverManagement.types";

interface InitialState {
  drivers: Partial<IDriverList>;
  drivers_proj: Partial<IDriverList>;
}
// initial State
const initialState: InitialState = {
  drivers: {},
  drivers_proj: {},
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const driverReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_DRIVER_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_DRIVER_FOR_PROJECT_SUCCESS:
      return {
        ...state,
        drivers_proj: action.payload,
      };
    case ADD_DRIVER_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        drivers: {
          ...state.drivers,
          result: state.drivers.result
            ? [...state.drivers.result, action.payload.result]
            : [action.payload.result],
        },
      };

    case EDIT_DRIVER_SUCCESS:
      let tmpArray = { ...state.drivers };
      if (tmpArray.result?.length) {
        for (let i = 0; i < tmpArray.result.length; i++) {
          if (tmpArray.result[i].id === action.payload.result.id) {
            tmpArray.result[i] = action.payload.result;
            break;
          }
        }
      }

      return {
        ...state,
        drivers: tmpArray,
      };
    case DELETE_DRIVER_SUCCESS:
      let tempArray1 = state.drivers.result ? [...state.drivers.result] : [];
      tempArray1 = tempArray1.filter((item) => item.id !== action.id);
      return {
        ...state,
        drivers: { ...state.drivers, result: tempArray1 },
      };
    default:
      return state;
  }
};
