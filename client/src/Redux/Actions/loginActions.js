import axios from "axios";

// Action Types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Action Creators
export const loginSuccess = (token, name) => ({
  type: LOGIN_SUCCESS,
  payload: { token, name },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk to handle login
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/auth/login",
      userData
    );
    const { token, name } = response.data.data;
    dispatch(loginSuccess(token, name));
    alert("Login Success!!");
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
    alert(error.response.data.message);
  }
};
