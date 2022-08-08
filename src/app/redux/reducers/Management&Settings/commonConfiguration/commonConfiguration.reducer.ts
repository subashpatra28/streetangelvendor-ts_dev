import { ICommonConfigurationList } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";

import {
  ADD_COMMON_CONFIGURATION_SUCCESS,
  DELETE_COMMON_CONFIGURATION_SUCCESS,
  EDIT_COMMON_CONFIGURATION_SUCCESS,
  GET_COMMON_CONFIGURATION_SUCCESS,
} from "./commonConfiguration.types";

interface InitialState {
  commonConfigurations: Partial<ICommonConfigurationList>;
}
// initial State
const initialState: InitialState = {
  commonConfigurations: {},
};

export const commonConfigurationsReducer = (
  state = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_COMMON_CONFIGURATION_SUCCESS:
      //   Login  user goes here

      return {
        ...state,
        commonConfigurations: action.payload,
      };

    case ADD_COMMON_CONFIGURATION_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        commonConfigurations: {
          ...state.commonConfigurations,
          result: state.commonConfigurations?.result?.length
            ? [...state.commonConfigurations.result, action.payload.result]
            : [action.payload.result],
        },
      };
    case EDIT_COMMON_CONFIGURATION_SUCCESS:
      let tempArray2 = { ...state.commonConfigurations };
      if (tempArray2?.result?.length) {
        for (let i = 0; i < tempArray2.result.length; i++) {
          if (tempArray2.result[i].id === action.payload.result.id) {
            tempArray2.result[i] = action.payload.result;
            break;
          }
        }
      }

      return {
        ...state,
        commonConfigurations: tempArray2,
      };
    case DELETE_COMMON_CONFIGURATION_SUCCESS:
      let tempArray1 = state.commonConfigurations.result
        ? [...state.commonConfigurations.result]
        : [];
      tempArray1 = tempArray1?.filter((each) =>
        each.id !== action.id ? true : false
      );

      return {
        ...state,
        commonConfigurations: {
          ...state.commonConfigurations,
          result: tempArray1,
        },
      };

    default:
      return state;
  }
};
