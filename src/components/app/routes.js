import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Form from "../modules/form/";
import About from "../modules/about/";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Form" component={Form} options={{ title: 'Form' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
