import { SET_COLOR } from "../constants";

const setColor = (color) => dispatch => {
  console.log('color', color)
   return dispatch({
      type: SET_COLOR,
      payload: color
    })
  }

  export default setColor;