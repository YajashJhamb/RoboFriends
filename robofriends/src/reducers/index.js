import { combineReducers } from "redux";
import robotReducer from "./robotReducer";

export default combineReducers({
  robots: robotReducer
});
