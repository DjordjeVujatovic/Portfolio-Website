import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/aboutReducer';
import booksReducer from './modules/reducers/booksReducer';
import educationReducer from './modules/reducers/educationReducer';
import toolsReducer from './modules/reducers/toolsReducer';
import projectReducer from './modules/reducers/projectReducer';
import mobileNavReducer from './modules/reducers/mobileNavReducer';
import mobileSubMenuReducer from './modules/reducers/subMenuReducer';
import redReducer from './modules/reducers/redReducer';
import collegeReducer from './modules/reducers/collegeReducer';
import universityReducer from './modules/reducers/universityReducer';

const combinedReducers = combineReducers({
  about: aboutReducer,
  books: booksReducer,
  education: educationReducer,
  tools: toolsReducer,
  projects: projectReducer,
  mobileNav: mobileNavReducer,
  mobileSubMenu: mobileSubMenuReducer,
  redState: redReducer,
  collegeState: collegeReducer,
  universityState: universityReducer,
});

export default combinedReducers;
