import {ADD_COUNT} from "../constants.js";

const counterAction = () => dispatch => {
  dispatch({
    type: ADD_COUNT,
    payload:1
  });
};

export default counterAction;