/**
 * Layout component
 */

import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";

import Header from "./header";

const Layout = props => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        {props.children}
      </SafeAreaView>
    </View>
  );
};

export default Layout;
