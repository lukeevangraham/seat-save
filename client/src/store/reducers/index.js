import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import churchReducer from "./church";
import eventReducer from "./event";
import groupReducer from "./group";

export default combineReducers({
  church: churchReducer,
  event: eventReducer,
  group: groupReducer,
  form: formReducer
});
