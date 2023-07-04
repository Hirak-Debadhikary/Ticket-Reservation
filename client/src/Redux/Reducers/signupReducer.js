const initialState = {
  signupSuccess: false,
  user: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        signupSuccess: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
