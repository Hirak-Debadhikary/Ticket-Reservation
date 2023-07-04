import { createStore, combineReducers } from "redux";
import loginReducer from "../Reducers/loginReducer";
import signupReducer from "../Reducers/signupReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

const store = createStore(rootReducer);

export default store;
