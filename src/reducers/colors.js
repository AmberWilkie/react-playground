import { ADD_COLOR, 
         REMOVE_COLOR, 
         SET_ROTATION } from '../actions';

const initialState = {
  data: [],
  rotation: '90'
}

export default function colors (state = initialState, action) {
  switch (action.type) {
    case ADD_COLOR:
      return {
        ...state,
        data: [...state.data, action.payload]
      }
    case REMOVE_COLOR:
      return {
        ...state,
        data: state.data.filter((color) => color !== action.payload)
      }
    case SET_ROTATION:
      return {
        ...state,
        rotation: action.payload  
      }
    default:
      return state;
  }
}
