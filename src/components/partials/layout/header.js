/**
 * Header Component
 */

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerBlock}>
    <Button
    title="Form"
    onPress={() => {
      navigation.navigate('Form');
    }}
  />
  <Button
  title="About"
  onPress={() => {
    navigation.navigate('About');
  }}
/>
      <Text style={styles.headerText}>React Native Test App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBlock: {
    width: "100%",
    height: 150,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
});

export default Header;
