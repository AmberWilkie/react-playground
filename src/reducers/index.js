import { combineReducers } from 'redux';
import ColorReducer from './colors';

const rootReducer = combineReducers({
  colors: ColorReducer
});

export default rootReducer;
