import React, { Component } from "react";
import GridHooks from "./GridHooks.js";
import "./grid.css";

class GridContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'teal',
      color1: "purple",
      color2: "yellow",
      color3: "red",
      color4: "black",
      newColor: null
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
      array.push(<GridHooks key={index }text={index} newColor={newColor} />);
    }
    return array;
  };

  render() {
    const { color, color1, color2, color3, color4 } = this.state;
    const rows = 8;
    const columns = 8;
    const count = rows * columns;

    let gridColumns = "";
    for (let index = 0; index < columns; index++) {
      gridColumns += " auto";
    }
    console.log("gridColumns", gridColumns);
    return (
      <div>
        <div className="container" style={{ gridTemplateColumns: gridColumns }}>
          {this.renderButton(count, color)} 
        </div>
        <div className="color-buttons">
          {this.colorSelect(color1)}
          {this.colorSelect(color2)}
          {this.colorSelect(color3)}
          {this.colorSelect(color4)}
        </div>
      </div>
    );
  }
}

export default GridContainer;
