/**
 * Form View
 */

import React, { Component} from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import makeInput, {
  handleTextInput,
  withFocus,
  withNextInputAutoFocusInput,
  withErrorIfNeeded,
} from "react-native-formik";
import { compose } from "recompose";
import isEmpty from "lodash.isempty";
// import { TextField } from "react-native-material-textfield";

import Layout from "../../partials/layout";
import InputTextL from "../../partials/input-text-label";
import Button from "../../partials/button";
import styles from "./styles";

const InputTextLabel = compose(
  handleTextInput,
  withFocus
)(InputTextL);

// const MyInput = compose(
//   handleTextInput,
//   withNextInputAutoFocusInput
// )(InputTextL);
// const Form = withNextInputAutoFocusForm(ScrollView, {
//   submitAfterLastInput: false
// });

const FormView = props => {
  const {
    handleSubmit,
    errors,
    submitCount,
    submitted,
    isValid,
    touched,
    values,
  } = props;
  let errorMessage = props.errorMessage || "";

  console.log('ff err', props);
  if (!isEmpty(errors) && submitCount) {
    errorMessage = "Enter required fields";
  }

  return (
    <Layout>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        {!submitted ? (
          <>
            {!!errorMessage && (
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            )}
            
            <InputTextLabel
              label="First Name"
              placeholder="First Name"
              name="name"
            />
            <InputTextLabel
              label="Last Name"
              placeholder="Last Name"
              name="surname"
            />
            
            
            <Button onPress={handleSubmit} title="Submit" />
          </>
        ) : (
          <Text>Your data was submitted</Text>
        )}
      </ScrollView>
     
    </Layout>
  );


};

export default FormView;
