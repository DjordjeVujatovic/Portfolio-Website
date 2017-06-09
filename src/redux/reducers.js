import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/aboutReducer';
import projectReducer from './modules/reducers/projectReducer';
import mobileNavReducer from './modules/reducers/mobileNavReducer';
import mobileSubMenuReducer from '../redux/modules/reducers/subMenuReducer';

const combinedReducers = combineReducers({
  about: aboutReducer,
  projects: projectReducer,
  mobileNav: mobileNavReducer,
  mobileSubMenu: mobileSubMenuReducer,
});

export default combinedReducers;
