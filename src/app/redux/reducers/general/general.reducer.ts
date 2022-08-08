import { ALWAYS_OPEN, END_LOADING, START_LOADING } from "./general.types";

// initial State
const initialState = {
  isLoading: false,
  open: true,
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const generalReducer = (state = initialState, action: $TSFixMe) => {
  switch (action.type) {
    case START_LOADING:
      //   Login  user goes here
      return { ...state, isLoading: true };
    case END_LOADING:
      //   Logout user goes here
      return { ...state, isLoading: false };
    case ALWAYS_OPEN:
      return { ...state, open: action.payload };

    default:
      return state;
  }
};
