/**
 * Launch file
 * TODO: Implement Router in this file
 * Now we launch only form module
 */

import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";

import "./declare-modules.tsx";
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
