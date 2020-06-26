/**
 * Footer component
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Footer: () => React$Node = () => {
  return (
    <View style={styles.footer}>
      <Text> footer </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "green",
    justifyContent: "flex-end"
  }
});

export default Footer;
