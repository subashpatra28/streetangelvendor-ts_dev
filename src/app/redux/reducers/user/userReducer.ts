// initial State
const initialState = {
  user: {
    1: "shawshank",
    2: "godfather",
    3: "ajshfioashfo",
  },
  guestModeOn: false,
};

// Reducer logic

// const action = {
//     type: 'LoginUser',
//     data: {id: 'asfasf', lastLoginAt: 'asfasfaf'}
// }

export const userReducer = (state = initialState, action: $TSFixMe) => {
  switch (action.type) {
    case "LoginUser":
      //   Login  user goes here
      return { ...state, user: action.data };
    case "logoutUser":
      //   Logout user goes here
      return { ...state, user: {} };

    default:
      return state;
  }
};
