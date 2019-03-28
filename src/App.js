import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "./logo.svg";
import simpleAction from "./actions/simpleAction";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  simpleAction = e => {
    this.props.simpleAction();
  };
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
          <Link className="c-tab" to="/calc">
            Calculation
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <button style={{ padding: "1rem" }} onClick={this.simpleAction}>
            Test Redux Simple Action
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
