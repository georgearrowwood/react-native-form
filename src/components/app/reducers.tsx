import { combineReducers } from "redux";
import { formReducer, FormState } from "../modules/form/reducers";

export interface AppState {
  form: FormState;
}

const appReducer = combineReducers({
  form: formReducer
});

export default appReducer;
