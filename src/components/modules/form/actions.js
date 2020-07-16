export const formSubmittedAction = value => async (dispatch, getState) => {
  return dispatch({
    type: "FORM_SUBMITTED",
    submitted: value
  });
};
