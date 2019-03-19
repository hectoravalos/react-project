import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div className="Tabs">
          <Link className="h-tab" to="/">
            Home
          </Link>
          <Link className="f-tab" to="/form">
            Form Field
          </Link>
          <Link className="cg-tab" to="/color-grid">
            Color Grid
          </Link>
        </div>
        <div className="home-header">Welcome to the React App!</div>
      </div>
    );
  }
}

export default App;
