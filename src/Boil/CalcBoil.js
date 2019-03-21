import React, { Component } from "react";
import BoilVerdict from "./BoilVerdict.js";
import "./boil.css";

export default class CalcBoil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temp: e.target.value });
  }

  render() {
    const { temp } = this.state;
    console.log("temp", parseFloat(temp));
    return (
      <fieldset>
        <div className="calc-form">
          <div style={{ padding: "1rem" }}>Enter a temperature</div>
          <input value={temp} onChange={this.handleChange} />
          <BoilVerdict celsius={parseFloat(temp)} />
        </div>
      </fieldset>
    );
  }
}
