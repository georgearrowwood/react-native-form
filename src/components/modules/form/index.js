import React, { Component } from "react";
import { withFormik } from "formik";

import FormView from "./view";

const formikData = {
  mapPropsToValues: props => {
    return {};
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.name) errors.name = "Required";
    if (!values.surname) errors.surname = "Required";

    return errors;
  },
  handleSubmit: async (values, { setSubmitting, props }) => {
    // await props.checkAndPayAction(values);
    setSubmitting(false);
  },
  displayName: "TestForm"
};

export default withFormik(formikData)(FormView);
