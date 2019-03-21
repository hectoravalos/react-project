import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FormComponent from "./IconForm/icon-form.js";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import GridContainer from "./ColorGrid/GridContainer";
import CalcBoil from "./Boil/CalcBoil";
// import Home from "./Home"

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/form" component={FormComponent} />
      <Route path="/color-grid" component={GridContainer} />
      <Route path="/calc" component={CalcBoil} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
