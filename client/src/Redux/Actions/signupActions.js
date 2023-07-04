import axios from "axios";

// Action Types
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// Action Creators
export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

// Thunk to handle signup
export const signup = (userData) => async (dispatch) => {
  try {
    await axios.post(
      "http://localhost:8080/api/auth/signup",
      userData
    );
    dispatch(signupSuccess());
    alert("Signup Successful!");
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
    alert("Signup Failed: " + error.response.data.message);
  }
};
