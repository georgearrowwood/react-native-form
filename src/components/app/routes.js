import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Form from "../modules/form/";
import About from "../modules/about/";

const Drawer = createDrawerNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Form">
        <Drawer.Screen name="Form" component={Form} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
};

export default MyStack;
