import React, { Component } from "react";
import "./grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: true,
      color2: true,
      color3: true,
      color4: true,
      color5: true,
      color6: true,
      color7: true,
      color8: true
    };
    this.changeColor1 = this.changeColor1.bind(this);
    this.changeColor2 = this.changeColor2.bind(this);
    this.changeColor3 = this.changeColor3.bind(this);
    this.changeColor4 = this.changeColor4.bind(this);
    this.changeColor5 = this.changeColor5.bind(this);
    this.changeColor6 = this.changeColor6.bind(this);
    this.changeColor7 = this.changeColor7.bind(this);
    this.changeColor8 = this.changeColor8.bind(this);
  }

  changeColor1() {
    const { color1 } = this.state;
    this.setState({ color1: !color1 });
  }
  changeColor2() {
    const { color2 } = this.state;
    this.setState({ color2: !color2 });
  }
  changeColor3() {
    const { color3 } = this.state;
    this.setState({ color3: !color3 });
  }
  changeColor4() {
    const { color4 } = this.state;
    this.setState({ color4: !color4 });
  }
  changeColor5() {
    const { color5 } = this.state;
    this.setState({ color5: !color5 });
  }
  changeColor6() {
    const { color6 } = this.state;
    this.setState({ color6: !color6 });
  }

  changeColor7() {
    const { color7 } = this.state;
    this.setState({ color7: !color7 });
  }

  changeColor8() {
    const { color8 } = this.state;
    this.setState({ color8: !color8 });
  }
  render() {
    const {
      color1,
      color2,
      color3,
      color4,
      color5,
      color6,
      color7,
      color8
    } = this.state;

    let colorOne = color1 ? "white" : "lightblue";
    let colorTwo = color2 ? "white" : "yellow";
    let colorThree = color3 ? "white" : "green";
    let colorFour = color4 ? "white" : "pink";
    let colorFive = color5 ? "white" : "red";
    let colorSix = color6 ? "white" : "silver";
    let colorSeven = color7 ? "white" : "blue";
    let colorEight = color8 ? "white" : "purple";

    return (
      <div>
        <div>
          <div className="header">THE GRID</div>
          <div className="container">
            <button
              className="Item-1"
              style={{ backgroundColor: colorOne }}
              onClick={this.changeColor1}
            >
              1
            </button>
            <button
              className="Item-2"
              style={{ backgroundColor: colorTwo }}
              onClick={this.changeColor2}
            >
              2
            </button>
            <button
              className="Item-3"
              style={{ backgroundColor: colorThree }}
              onClick={this.changeColor3}
            >
              3
            </button>
            <button
              className="Item-4"
              style={{ backgroundColor: colorFour }}
              onClick={this.changeColor4}
            >
              4
            </button>
            <button
              className="Item-5"
              style={{ backgroundColor: colorFive }}
              onClick={this.changeColor5}
            >
              5
            </button>
            <button
              className="Item-6"
              style={{ backgroundColor: colorSix }}
              onClick={this.changeColor6}
            >
              6
            </button>
            <button
              className="Item-7"
              style={{ backgroundColor: colorSeven }}
              onClick={this.changeColor7}
            >
              7
            </button>
            <button
              className="Item-8"
              style={{ backgroundColor: colorEight }}
              onClick={this.changeColor8}
            >
              8
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
