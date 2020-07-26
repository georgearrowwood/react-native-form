import { Dispatch } from "redux";

import { ActionType } from "../../../types";
import { formValues } from "./index";
import services from "./services";
import { AppState } from "../../app/reducers";

export const formSubmittedAction = (value: boolean): ActionType => {
  return {
    type: "FORM_SUBMITTED",
    value
  };
};

export const formSubmitAction = (values: formValues) => async (
  dispatch: Dispatch<ActionType>,
  getState: () => AppState
) => {
  await services().submitForm(values);
  dispatch(formSubmittedAction(true));
};