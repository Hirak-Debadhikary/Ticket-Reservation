import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../Actions/signupActions";

const initialState = {
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, error: null };
    case SIGNUP_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default signupReducer;
