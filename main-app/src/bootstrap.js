import App from "./App";
import React from "react";
// import ReactDOM from "react-dom";

// // use createRoot
// ReactDOM.render(<App/>, document.getElementById("root"));

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/Header";
import Footer from "./components/Footer";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>
);
