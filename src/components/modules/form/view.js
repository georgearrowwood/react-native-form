/**
 * Form View
 */

import React from "react";
import { Text, ScrollView, View } from "react-native";
import { handleTextInput, withFocus } from "react-native-formik";
import { compose } from "recompose";
import isEmpty from "lodash.isempty";

import Layout from "../../partials/layout";
import InputTextL from "../../partials/input-text-label";
import Button from "../../partials/button";
import styles from "./styles";

const InputTextLabel = compose(
  handleTextInput,
  withFocus
)(InputTextL);

const FormView = props => {
  const { handleSubmit, errors, submitCount, submitted } = props;
  let errorMessage = props.errorMessage || "";

  if (!isEmpty(errors) && submitCount) {
    errorMessage = "Enter required fields";
  }

  return (
    <Layout>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <View>
          {!submitted && (
            <View>
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
            </View>
          )}
          {submitted && (
            <View>
              <Text>Your data was submitted</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default FormView;
