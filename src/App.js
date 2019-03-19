import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="Tabs">
        <Link className="f-tab" to="/idk">Form Field</Link>
        <Link className="gh-tab" to="/grid-hooks">Grid w/Hooks</Link>
        <Link className="g-tab" to="/grid">Color Grid</Link>
      </div>
    );
  }
}

export default App;
