import { IProjectList, IProjectMgmtList } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  ADD_PROJECT_MGMT_SUCCESS,
  DELETE_PROJECT_MGMT_SUCCESS,
  EDIT_PROJECT_MGMT_SUCCESS,
  GET_PROJECT_MGMT_SUCCESS,
  GET_PROJECT_SUCCESS,
} from "./projectManagement.types";

interface InitialState {
  projects: Partial<IProjectList>;
  project_mgmt: Partial<IProjectMgmtList>;
}

// initial State
const initialState: InitialState = {
  projects: {},
  project_mgmt: {},
};

export const projectReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_PROJECT_MGMT_SUCCESS:
      return {
        ...state,
        project_mgmt: action.payload,
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT_MGMT_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        project_mgmt: {
          ...state.project_mgmt,
          result: [...(state.project_mgmt.result ?? []), action.payload.result],
        },
      };

    case EDIT_PROJECT_MGMT_SUCCESS:
      let tmpArray = { ...state.project_mgmt };
      if (tmpArray?.result?.length) {
        for (let i = 0; i < tmpArray.result.length; i++) {
          if (tmpArray.result[i].id === action.payload.result.id) {
            tmpArray.result[i] = action.payload.result;
            break;
          }
        }
      }

      return {
        ...state,
        project_mgmt: tmpArray,
      };

    case DELETE_PROJECT_MGMT_SUCCESS:
      return {
        ...state,
        project_mgmt: {
          ...state.project_mgmt,
          result:
            state.project_mgmt?.result?.filter(
              (each) => each.id !== action.id
            ) ?? [],
        },
      };

    default:
      return state;
  }
};
