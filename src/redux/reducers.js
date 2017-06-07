import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/aboutReducer';
import projectsReducer from './modules/reducers/projectReducer';

export default combineReducers({
  about: aboutReducer,
  projects: projectsReducer,
});
