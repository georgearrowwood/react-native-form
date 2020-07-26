import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

const TextInputWithLabel = props => {
  // const { error, containerStyle, inputStyle, focused, label, form } = props;
  const { reff, containerStyle, inputStyle, label, form } = props;
  const inputStyles = [styles.textInput];
  const containerStyles = [styles.container];
  const labelStyles = [styles.label];

  const errors = form.getErrorsInField(reff);
  const error = errors && errors.length ? errors[0] : null;

  if (error) {
    inputStyles.push(styles.textInputError);
    labelStyles.push(styles.labelError);
  }

  if (containerStyle) {
    containerStyles.push(containerStyle);
  }

  if (inputStyle) {
    inputStyles.push(inputStyle);
  }

  console.log('aa', form.state[reff], reff, error);

  return (
    <View style={containerStyles}>
      {!!label && <Text style={labelStyles}>{label}</Text>}
      <TextInput
        style={inputStyles}
        // ref={reff}
        value={form.state[reff]}
        onChangeText={value => {
          form.setState({ [reff]: value });
          form._onPressButton();
        }}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      {!!error && (
        <View style={styles.inputErrorBox}>
          <Text style={styles.inputErrorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};


export default TextInputWithLabel;
