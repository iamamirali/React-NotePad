import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Context } from "./context";
import SingleNote from "./singleNote";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Context>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/singleNote/:id" children={<SingleNote />}></Route>
        </Switch>
      </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
