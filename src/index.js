/**
 * Launch file
 * TODO: Implement Router in this file
 * Now we launch only form module
 */

import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store";
import Form from "./components/modules/form/";

const store = configureStore();

const App = () => {
  return(
    <Provider store={store}>
      <Form />
    </Provider>
  );
};

export default App;
