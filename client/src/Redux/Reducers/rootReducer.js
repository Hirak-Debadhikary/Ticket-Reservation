import { combineReducers } from "redux";
import authReducer from "./signupReducer";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
