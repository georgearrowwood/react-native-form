/**
 * Header Component
 */

import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerBlock}>
      <Text style={styles.headerText}>React Native Test App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBlock: {
    width: "100%",
    height: 50,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Header;
