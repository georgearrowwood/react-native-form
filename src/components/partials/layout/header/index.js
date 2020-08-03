/**
 * Header Component
 */

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import MenuIconImage from "./ham-menu.png";

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

export default Header;
