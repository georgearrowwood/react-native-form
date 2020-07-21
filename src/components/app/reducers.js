import { combineReducers } from "redux";
import form from "../modules/form/reducers";

const appReducer = combineReducers({
  form
});

export default appReducer;
