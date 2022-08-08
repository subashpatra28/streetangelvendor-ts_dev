import { RoleResponseType } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  GET_MANAGE_ROLES_SUCCESS,
  ADD_MANAGE_ROLES_SUCCESS,
  EDIT_MANAGE_ROLES_SUCCESS,
  DELETE_MANAGE_ROLES_SUCCESS,
} from "./manageRoles.types";

interface InitialState {
  manageRoles: Partial<RoleResponseType>;
}

// initial State
const initialState = {
  manageRoles: {},
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const manageRolesReducer = (
  state: InitialState = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_MANAGE_ROLES_SUCCESS:
      //   Login  user goes here

      return {
        ...state,
        manageRoles: action.payload,
      };
    case ADD_MANAGE_ROLES_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        manageRoles: {
          ...state.manageRoles,
          result: state.manageRoles?.result?.length
            ? [...state.manageRoles.result, action.payload.result]
            : [action.payload.result],
        },
      };
    case EDIT_MANAGE_ROLES_SUCCESS:
      let tempArray2 = { ...state.manageRoles };
      if (tempArray2?.result?.length) {
        for (let i = 0; i < (state.manageRoles?.result?.length ?? 0); i++) {
          if (tempArray2.result[i].id === action.payload.result.id) {
            tempArray2.result[i] = action.payload.result;
            break;
          }
        }
      }
      return {
        ...state,
        manageRoles: tempArray2,
      };
    case DELETE_MANAGE_ROLES_SUCCESS:
      console.log(action, "ppppppp");
      let tempArray1 = state.manageRoles.result
        ? [...state.manageRoles.result]
        : [];
      tempArray1 = tempArray1?.length
        ? tempArray1.filter((each) => (each.id !== action.id ? true : false))
        : tempArray1;

      return {
        ...state,
        manageRoles: {
          ...state.manageRoles,
          result: tempArray1,
        },
      };

    default:
      return state;
  }
};
