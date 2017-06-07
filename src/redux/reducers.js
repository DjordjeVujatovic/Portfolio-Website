import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/aboutReducer';
import projectReducer from './modules/reducers/projectReducer';

const combinedReducers = combineReducers({
  about: aboutReducer,
  projects: projectReducer,
});

export default combinedReducers;
