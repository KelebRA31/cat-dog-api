import { combineReducers } from 'redux';

import catReducer from './catReducer';
import dogReducer from './dogReducer';
import likeReducer from './likeReducer';

const rootReducer = combineReducers({
  cat: catReducer,
  dog: dogReducer,
  like: likeReducer,

});

export default rootReducer;
