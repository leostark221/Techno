import React from "react";
import "./App.css";
import Routing from "./services/config/router";
import { Provider } from "react-redux";
import store from "./Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
