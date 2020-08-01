import { withFormik } from "formik";
import { connect } from "react-redux";
import { compose } from "recompose";

import FormView from "./view";
import { formSubmitAction } from "./actions";
import { AppState } from "../../app/reducers";

export interface formValues {
  name: string,
  surname: string,
}

const formikData = {
  mapPropsToValues: (): formValues => {
    return {
      name: "",
      surname: ""
    };
  },
  validate: (values: formValues) => {
    const errors = {} as formValues;
    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";

    return errors;
  },
  handleSubmit: async (values: formValues, { setSubmitting, props } : {setSubmitting: any, props: any}) => {
    await props.formSubmitAction(values);
    setSubmitting(false);
  },
  displayName: "TestForm"
};

function mapStateToProps(state: AppState) {
  return {
    submitted: state.form.submitted
  };
}

export default compose(
  connect(
    mapStateToProps,
    { formSubmitAction }
  ),
  withFormik(formikData)
)(FormView);
