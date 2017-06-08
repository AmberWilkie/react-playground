export const ADD_COLOR = 'ADD_COLOR';
export const REMOVE_COLOR = 'REMOVE_COLOR';
export const SET_ROTATION = 'SET_ROTATION';

export function addColor(color) {
  return {
    type: ADD_COLOR,
    payload: color
  }
}

export function removeColor(color = null) {
  return {
    type: REMOVE_COLOR,
    payload: color
  }
}

export function setRotation(rotation = 0) {
  return {
    type: SET_ROTATION,
    payload: rotation
  }
}
