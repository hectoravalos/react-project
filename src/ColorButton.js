import React, { Component } from "react";
import "./grid.css";

class ColorButton extends Component {
  render() {
    const { color, onClick, isActive } = this.props;

    const styled = { backgroundColor: color, border: "solid black" };
    const nonStyled = { backgroundColor: color };
    const buttonStyle = isActive ? styled : nonStyled;

    return (
      <button
        className="color-buttons"
        style={buttonStyle}
        onClick={() => onClick(color)}
      />
    );
  }
}

export default ColorButton;
