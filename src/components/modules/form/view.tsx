/**
 * Form View
 */

import React from "react";
import { Text, ScrollView } from "react-native";
import {
  handleTextInput,
} from "react-native-formik";
import { compose } from "recompose";
import isEmpty from "lodash.isempty";

import Layout from "../../partials/layout";
import InputTextL from "../../partials/input-text-label";
import Button from "../../partials/button";
import styles from "./styles";

const InputTextLabel = compose(
  handleTextInput,
)(InputTextL);

const FormView = (props: any) => {
  const {
    handleSubmit,
    errors,
    submitCount,
    submitted
  } = props;
  let errorMessage = props.errorMessage || "";
  console.log('aaaac', props)
  if (!isEmpty(errors) && submitCount) {
    errorMessage = "Enter required fields";
  }

  return (
    <Layout>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
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
