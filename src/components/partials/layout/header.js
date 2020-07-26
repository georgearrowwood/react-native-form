/**
 * Header Component
 */

import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import MenuIconImage from './ham-menu.png';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerBlock}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => {
          navigation.toggleDrawer();
        }}
      >
        <Image style={styles.menuImage} source={MenuIconImage} />
      </TouchableOpacity>
      <Text style={styles.headerText}>React Native Test App</Text>
      <View style={styles.headerRight} />
    </View>
  );
};

const styles = StyleSheet.create({
  menuImage: {
    width: 28,
    height: 28,
  },
  menuButton: {
    margin: 4,
  },
  headerRight: {
    width: 38,
    height: 30,
  },
  headerBlock: {
    width: "100%",
    height: 50,
    paddingTop: 10,
    paddingLeft: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor:'yellow',
    borderWidth:1
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    padding: 6
  }
});

export default Header;
