/**
 * Layout component
 */

import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, Text } from "react-native";

// import { Container, Header, Left, Right, Body, Title, Content } from 'native-base';

import Header from "./header";

const Layout: () => React$Node = (props) => {
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

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'green',
    borderWidth: 1
  },
  container: {
    flex: 1
  }
});

export default Layout;
