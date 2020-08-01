import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import styles from "./styles";

const CustomButton = (props: any) => {
  const buttonStyles = [styles.button];
  return (
    <View style={[styles.container, props.customContainerStyle]}>
      <TouchableOpacity {...props} style={buttonStyles}>
        <Text style={[styles.titleButton, props.customTitleStyle]}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
