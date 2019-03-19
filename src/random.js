import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "./icons.css";

let icons = [
  {
    type: "monster",
    color: "green",
    friendly: false,
    limbs: 4,
    dob: "1999-02-13"
  },
  {
    type: "dolphin",
    color: "blue",
    friendly: true,
    limbs: 4,
    dob: "1998-07-3"
  },
  {
    type: "rabbit",
    color: "blue",
    friendly: true,
    limbs: 4,
    dob: "1999-02-11"
  },
  {
    type: "ninja",
    color: "blue",
    friendly: false,
    limbs: 4,
    dob: "1950-01-25"
  },
  {
    type: "octopus",
    color: "purple",
    friendly: true,
    limbs: 8,
    dob: "2006-05-07"
  },
  {
    type: "cactus",
    color: "blue",
    friendly: false,
    limbs: 4,
    dob: "2003-04-13"
  },
  {
    type: "snail",
    color: "green",
    friendly: false,
    limbs: 0,
    dob: "1995-11-19"
  },
  {
    type: "penguin",
    color: "purple",
    friendly: true,
    limbs: 4,
    dob: "1998-11-13"
  },
  {
    type: "bird",
    color: "purple",
    friendly: true,
    limbs: 2,
    dob: "1966-09-26"
  },
  {
    type: "squirrel",
    color: "blue",
    friendly: true,
    limbs: 4,
    dob: "2009-08-23"
  },
  {
    type: "girl",
    color: "green",
    friendly: true,
    limbs: 4,
    dob: "1903-3-03"
  }
];

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: props.value,
      selectedCard: null,
      type: "",
      color: "",
      friendly: "Nope",
      limbs: "",
      dob: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.handleLimbsChange = this.handleLimbsChange.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
  }

  handleChange(event) {
    this.setState({ selectValue: event.target.value });
  }

  handleTypeChange(event) {
    this.setState({ type: event.target.value });
  }

  handleColorChange(event) {
    this.setState({ color: event.target.value });
  }

  toggleCheckbox() {
    this.setState({ friendly: "Sure" });
  }

  handleLimbsChange(event) {
    this.setState({ limbs: event.target.value });
  }

  handleDobChange(event) {
    this.setState({ dob: event.target.value });
  }

  showCard = icon => {
    this.setState({ selectedCard: icon });
  };

  findByColors = () => {
    const { selectValue } = this.state;
    let array = [];
    for (let i = 0; i < icons.length; i++) {
      const icon = icons[i];
      if (icon.color === selectValue) {
        array.push({
          type: icon.type,
          color: icon.color,
          friendly: icon.friendly,
          limbs: icon.limbs,
          dob: icon.dob
        });
      }
    }

    const buttons = array.map((icon, index) => {
      return (
        <button
          className="icon-buttons"
          key={index}
          onClick={() => this.showCard(icon)}
        >
          {icon.type}
        </button>
      );
    });

    return buttons;
  };

  addValue = () => {
    const { type, color, friendly, limbs, dob } = this.state;
    console.log("type", type);
    console.log("color", color);
    console.log("friendly", friendly);
    console.log("limbs", limbs);
    console.log("dob", dob);
    // const input1 = document.getElementById("type");
    // const input2 = document.getElementById("color");
    // const input3 = document.querySelector("input[name=friendly]:checked");
    // const input4 = document.getElementById("limbs");
    // const input5 = document.getElementById("dob");
    const select = document.getElementById("select");
    const option = document.createElement("option");
    option.value = color.toLowerCase();
    option.text = color;

    const limbValue = parseInt(limbs, 10);
    // const buttonValue = input3 ? input3.value : "";
    // const friendlyValue = buttonValue.toLowerCase() === "true" ? true : false;

    const colors = icons.map(icon => icon.color);

    if (type === "") {
      document.getElementById("type-error").innerHTML = "Type is required!";
      return false;
    } else if (type !== "") {
      document.getElementById("type-error").innerHTML = "";
    }

    if (color === "Select Option...") {
      document.getElementById("color-error").innerHTML = "Color is required!";
      return false;
    } else if (color !== "") {
      document.getElementById("color-error").innerHTML = "";
    }

    // if (friendly === "") {
    //   document.getElementById("radio-error").innerHTML =
    //     "Selection is required!";
    //   return false;
    // } else if (friendly !== "") {
    //   document.getElementById("radio-error").innerHTML = "";
    // }

    if (limbs === "") {
      document.getElementById("limb-error").innerHTML = "Limbs is required!";
      return false;
    } else if (limbs !== "") {
      document.getElementById("limb-error").innerHTML = "";
    }

    if (dob === "") {
      document.getElementById("date-error").innerHTML =
        "Date of Birth is required!";
      return false;
    } else if (dob !== "") {
      document.getElementById("date-error").innerHTML = "";
    }

    if (colors.indexOf(color.toLowerCase()) === -1) {
      select.add(option);
    }

    icons.push({
      type: type,
      color: color.toLowerCase(),
      friendly: friendly,
      limbs: limbValue,
      dob: dob
    });

    this.setState({
      type: "",
      color: "",
      limbs: "",
      dob: ""
    });

    document.forms["myForm"].reset();
  };

  render() {
    const { selectedCard, selectValue, friendly } = this.state;
    console.log("selectedCard", selectedCard);
    console.log("selectValue", selectValue);
    return (
      <div className="Body">
        <Fade left>
          <div className="Headline" style={{ padding: "1rem" }}>
            Filter The Icon Card Here!!
          </div>
        </Fade>
        <div className="selectBox">
          <select id="select" className="select" onChange={this.handleChange}>
            <option>Select Color to Filter By</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
          </select>
        </div>
        <div className="yo">{this.findByColors()}</div>
        {selectedCard && selectValue !== "Select Color to Filter By" && (
          <div id="card" className="card">
            <p>Type: {selectedCard.type}</p>
            <p>Color: {selectedCard.color}</p>
            <p>Friendly: {selectedCard.friendly.toString()}</p>
            <p>Number of Limbs: {selectedCard.limbs}</p>
            <p>Date of Birth: {selectedCard.dob}</p>
          </div>
        )}
        <div className="icon-title">Add a new icon character below!</div>
        <fieldset className="feild-set">
          <form id="myForm" className="myForm">
            <div className="form-titles">Type:</div>
            <input
              type="text"
              id="type"
              placeholder="Icon Type..."
              onChange={this.handleTypeChange}
            />
            <p id="type-error" className="error" />
            <div className="form-titles">Color:</div>
            <select
              id="color"
              className="select-style"
              onChange={this.handleColorChange}
            >
              <option>Select Option...</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Purple">Purple</option>
              <option value="Orange">Orange</option>
              <option value="Yellow">Yellow</option>
              <option value="Red">Red</option>
              <option value="Pink">Pink</option>
              <option value="Brown">Brown</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
            </select>
            <p id="color-error" className="error" />
            <div className="form-titles">Friendly?:</div>
            {/* <p className="radio-titles">True</p>
            <input
              type="radio"
              name="friendly"
              value="true"
              onChange={this.handleFriendlyChange}
            />
            <p className="radio-titles">False</p>
            <input
              type="radio"
              name="friendly"
              value="false"
              onChange={this.handleFriendlyChange}
            /> */}
            <input
              type="checkbox"
              value={friendly}
              onChange={this.toggleCheckbox}
            />
            <p id="radio-error" className="error" />
            <div className="form-titles">Limbs:</div>
            <input
              type="number"
              min="0"
              id="limbs"
              placeholder="Number of Limbs..."
              onChange={this.handleLimbsChange}
            />
            <p id="limb-error" className="error" />
            <div className="form-titles">Date of Birth:</div>
            <input
              type="date"
              max="2019-02-20"
              id="dob"
              onChange={this.handleDobChange}
            />
            <p id="date-error" className="error" />
            <button
              className="save-button"
              type="button"
              onClick={() => this.addValue()}
            >
              Sumbit
            </button>
          </form>
        </fieldset>
      </div>
    );
  }
}

export default FormComponent;
