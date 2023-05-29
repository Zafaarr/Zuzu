import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ZuzuRedux } from "./Redux/ZuzuRedux";
import { combineReducers, createStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

const allReducers = combineReducers({ zuzu: ZuzuRedux });

const store = createStore(allReducers);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
);
