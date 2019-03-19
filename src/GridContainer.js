import React, { Component } from "react";
import GridHooks from "./GridHooks.js";
import ButtonContainer from "./ButtonContainer";
import "./grid.css";

class GridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: null
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor = o => {
    this.setState({ color: o });
  };

  colorSelect = color => {
    return (
      <button
        className="color-item"
        style={{ backgroundColor: color }}
        onClick={() => this.changeColor(color)}
      />
    );
  };

  renderButton = (count, newColor) => {
    const array = [];
    for (let index = 0; index < count; index++) {
      array.push(<GridHooks key={index} text={index} newColor={newColor} />);
    }
    return array;
  };

  render() {
    const { color } = this.state;
    console.log("color", color);
    const rows = 8;
    const columns = 8;
    const count = rows * columns;

    let gridColumns = "";
    for (let index = 0; index < columns; index++) {
      gridColumns += " auto";
    }

    return (
      <div>
        <div className="color-buttons-container">
          <ButtonContainer changeColor={this.changeColor} activeColor={color} />
        </div>
        <div className="container" style={{ gridTemplateColumns: gridColumns }}>
          {this.renderButton(count, color)}
        </div>
      </div>
    );
  }
}

export default GridContainer;
