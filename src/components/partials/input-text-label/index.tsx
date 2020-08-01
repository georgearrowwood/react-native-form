import React from "react";
import { View, Text, TextInput } from "react-native";

import styles from "./styles";

interface TextInputWithLabelProps {
  name?: string,
  label?: string,
  placeholder: string,
  children?: ReactNode
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ( props ) => {
  const { error, containerStyle, inputStyle, focused, label, name, placeholder } = props;
  const inputStyles = [styles.textInput];
  const containerStyles = [styles.container];
  const labelStyles = [styles.label];

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

  return (
    <View style={containerStyles}>
      {!!label && <Text style={labelStyles}>{label}</Text>}
      <TextInput
        style={inputStyles}
        name={name}
        label={label}
        placeholder={placeholder}
        placeholderTextColor="grey"
        autoCapitalize="none"
      />
      {!!error && error !== "Required" && !focused && (
        <View style={styles.inputErrorBox}>
          <Text style={styles.inputErrorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default TextInputWithLabel;
