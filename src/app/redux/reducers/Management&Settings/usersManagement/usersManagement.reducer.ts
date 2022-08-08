import { UserResp } from "../../../../../global.types";
import { AppActions } from "../../../store/globalstore";
import {
  ADD_USERS_SUCCESS,
  DELETE_USERS_SUCCESS,
  EDIT_USERS_SUCCESS,
  GET_USERS_SUCCESS,
} from "./usersManagement.types";

interface InitialState {
  users: Partial<UserResp>;
}
// initial State
const initialState: InitialState = {
  users: {},
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const usersReducer = (
  state: InitialState = initialState,
  action: AppActions
) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case ADD_USERS_SUCCESS:
      //   Login  user goes here
      return {
        ...state,
        users: {
          ...state.users,
          result: [...(state.users.result ?? []), action.payload.result],
        },
      };
    case EDIT_USERS_SUCCESS:
      let tmpArray = { ...state.users };
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
        users: tmpArray,
      };

    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          result: state.users.result?.filter((each) => each.id !== action.id),
        },
      };
    default:
      return state;
  }
};
