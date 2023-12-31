import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import App from "./routes/App";

import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
