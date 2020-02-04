import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";

const { store } = createStore();

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root")
);
