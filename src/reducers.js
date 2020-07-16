import { combineReducers } from "redux";
import form from "./components/modules/form/reducers";

const appReducer = combineReducers({
  form
});

export default appReducer;
