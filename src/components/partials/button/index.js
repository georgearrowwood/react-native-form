import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const CustomButton = props => {
  const { onPress, customContainerStyle, customTitleStyle } = props;
  const containerStyle = [styles.container, customContainerStyle];
  const titleStyles = [styles.titleButton, customTitleStyle];
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={titleStyles}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  customContainerStyle: PropTypes.object,
  customTitleStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired
};

export default CustomButton;
