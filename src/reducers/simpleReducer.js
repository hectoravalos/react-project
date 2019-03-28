import { SIMPLE_ACTION, SET_COLOR } from "../constants.js";

export const initialState = {
  buttonResult: "Test Button Not Clicked",
  currentColor: "Initial Color"
};

export default (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case SIMPLE_ACTION:
      return {
        buttonResult: action.payload
      };

    case SET_COLOR: {
      return {
        ...state,
        currentColor: action.payload
      }
    }
    default:
      return state;
  }
};
