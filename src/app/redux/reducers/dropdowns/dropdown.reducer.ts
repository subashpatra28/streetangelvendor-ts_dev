import {
  IDialCodeList,
  IOrgList,
  IProjectList,
  IResourceRolesList,
} from "../../../../global.types";
import { AppActions } from "../../store/globalstore";
import {
  GET_DIAL_CODE_SUCCESS,
  GET_ORG_LIST_SUCCESS,
  GET_PROJECT_LIST_FROM_ORG_SUCCESS,
  GET_RESOURCE_ROLE_LIST_SUCCESS,
} from "./dropdown.types";

interface InitialState {
  dropdowns: {
    orgList: Partial<IOrgList>;
    projects_org: Partial<IProjectList>;
    dialCode: Partial<IDialCodeList> & {
      dropDown?: { label: string; value: string }[];
    };
    resourceRolesList: Partial<IResourceRolesList>;
  };
}

// initial State
const initialState: InitialState = {
  dropdowns: {
    projects_org: {},
    orgList: {},
    dialCode: {},
    resourceRolesList: {},
  },
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const dropdownReducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case GET_ORG_LIST_SUCCESS:
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          orgList: action.payload,
        },
      };

    case GET_DIAL_CODE_SUCCESS:
      let tmpArray = action.payload.result.map((eachItem) => ({
        label: eachItem,
        value: eachItem,
      }));
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          dialCode: { ...action.payload, dropDown: tmpArray },
        },
      };
    case GET_PROJECT_LIST_FROM_ORG_SUCCESS:
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          projects_org: action.payload,
        },
      };

    case GET_RESOURCE_ROLE_LIST_SUCCESS:
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          resourceRolesList: action.payload,
        },
      };

    default:
      return state;
  }
};
