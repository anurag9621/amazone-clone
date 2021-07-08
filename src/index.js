import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css"
import App from "./App";
import reducer, { initialState } from "./server/reducer"
import {StateProvider} from "./server/StateProvider"
const rootElement = document.getElementById("root");
ReactDOM.render(
<React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider >
  </React.StrictMode>,
  rootElement
);