import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../Actions/loginActions";

const initialState = {
  token: null,
  name: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        error: null,
      };
    case LOGIN_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
