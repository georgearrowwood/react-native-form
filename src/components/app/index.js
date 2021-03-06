/**
 * App Main Launch file
 */

import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";

import configureStore from "./store";
import Routes from "./routes";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
