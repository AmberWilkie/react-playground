import { combineReducers } from 'redux';
import ColorReducer from './colors';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  colors: ColorReducer,
  router: routerReducer
});

export default rootReducer;
