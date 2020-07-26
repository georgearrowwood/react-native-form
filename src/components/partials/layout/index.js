/**
 * Layout component
 */

import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Header from "./header";

const Layout = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        {props.children}
      </SafeAreaView>
    </>
  );
};

export default Layout;
