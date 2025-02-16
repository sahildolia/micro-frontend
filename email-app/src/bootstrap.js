import App from "./App";
import React from "react";
import { Provider } from "react-redux";
import { store } from "app1/store";

import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
