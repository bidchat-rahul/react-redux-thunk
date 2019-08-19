import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import HelloApi from "./Components/HelloApi";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./Components/HelloApi/State/reducer";

import "./styles.css";

function App() {
  console.log("test");
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      {/* <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}
      <HelloApi />
      {/* </div> */}
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
