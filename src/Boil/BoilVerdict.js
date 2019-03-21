import React from "react";

const BoilVerdict = props => {
  if (props.celsius >= 100) {
    return <div style={{ padding: "1rem" }}> Water Would Boil! :)</div>;
  } else {
    return <div style={{ padding: "1rem" }}> Water Would Not Boil! :(</div>;
  }
};

export default BoilVerdict;
