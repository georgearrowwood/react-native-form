import { withFormik } from "formik";
import { connect } from "react-redux";
import { compose } from "recompose";

import FormView from "./view";
import { formSubmittedAction } from "./actions";

const formikData = {
  mapPropsToValues: props => {
    return {
      name: "",
      surname: ""
    };
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    await props.formSubmittedAction(true);
    setSubmitting(false);
  },
  displayName: "TestForm"
};

function mapStateToProps(state) {
  return {
    submitted: state.form.submitted
  };
}

export default compose(
  connect(
    mapStateToProps,
    { formSubmittedAction }
  ),
  withFormik(formikData)
)(FormView);
