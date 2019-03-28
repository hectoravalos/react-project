import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import GridPanels from "./GridPanels.js";
import ButtonContainer from "./ButtonContainer";
import "./grid.css";
import setColor from "../actions/Color";

class GridContainer extends Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor = o => {
    this.props.setColor(o);
  };

  renderButton = (count, newColor) => {
    const array = [];
    for (let index = 0; index < count; index++) {
      array.push(<GridPanels key={index} text={index} newColor={newColor} />);
    }
    return array;
  };

  render() {
    const { color } = this.props;
    const rows = 12;
    const columns = 12;
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
const mapStateToProps = state => ({
  color: state.simpleReducer.currentColor
});
console.log("Color.setColor", setColor);
const mapDispatchToProps = dispatch => ({
  setColor: bindActionCreators(setColor, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridContainer);
