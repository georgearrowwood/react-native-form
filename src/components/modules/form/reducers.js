const defaultState = {
  submitted: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "FORM_SUBMITTED":
      return {
        ...state,
        submitted: action.submitted
      };

    default:
      return state;
  }
};
