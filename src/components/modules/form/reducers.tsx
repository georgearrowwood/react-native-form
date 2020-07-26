import { ActionType } from "../../../types";

export interface FormState {
  submitted: boolean;
}

const defaultState: FormState = {
  submitted: false
};

export const formReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case "FORM_SUBMITTED":
      return {
        ...state,
        submitted: action.value
      };

    default:
      return state;
  }
};
