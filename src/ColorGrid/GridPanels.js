import React, { Component } from "react";
import "./grid.css";

class GridPanels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
      text: props.text
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = () => {
    const { active } = this.state;
    this.setState({ active: !active });
    if (this.props.newColor !== this.state.color) {
      this.setState({ color: this.props.newColor });
      if (active) {
        this.setState({ active: true });
      }
    }
  };

  render() {
    const { active, text, color } = this.state;

    const colorSelection = !active ? "white" : color;

    return (
      <button
        className="Item"
        style={{ backgroundColor: colorSelection }}
        onClick={() => this.changeColor()}
      >
        {text}
      </button>
    );
  }
}

export default GridPanels;
