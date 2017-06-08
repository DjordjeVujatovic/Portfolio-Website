import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/aboutReducer';
import projectReducer from './modules/reducers/projectReducer';
import mobileNavReducer from './modules/reducers/mobileNavReducer';

const combinedReducers = combineReducers({
  about: aboutReducer,
  projects: projectReducer,
  mobileNav: mobileNavReducer,
});

export default combinedReducers;
