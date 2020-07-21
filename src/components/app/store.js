import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

export default function configureStore() {
  const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));
  return store;
}
