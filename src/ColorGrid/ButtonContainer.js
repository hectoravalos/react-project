import React, { Component } from "react";
import ColorButton from "./ColorButton.js";

class ButtonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorList: [
        "teal",
        "purple",
        "yellow",
        "red",
        "green",
        "silver",
        "gold",
        "black",
        "blue",
        "pink",
        "brown",
        "steelblue"
      ],
      selected: false
    };
  }

  isSelected() {
    this.setState({ selected: true });
  }

  render() {
    const { colorList } = this.state;
    const { changeColor, activeColor } = this.props;
    return (
      <div>
        {colorList.map((color, index) => {
          let isActive = activeColor === color;
          return (
            <ColorButton
              key={index}
              color={color}
              isActive={isActive}
              onClick={color => changeColor(color, this.isSelected)}
            />
          );
        })}
      </div>
    );
  }
}

export default ButtonContainer;
