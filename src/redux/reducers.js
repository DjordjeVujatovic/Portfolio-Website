import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/FetchReducers/aboutReducer';
import booksReducer from './modules/reducers/FetchReducers/booksReducer';
import educationReducer from './modules/reducers/FetchReducers/educationReducer';
import toolsReducer from './modules/reducers/FetchReducers/toolsReducer';
import projectReducer from './modules/reducers/FetchReducers/projectReducer';
import mobileNavReducer from './modules/reducers/NavigationReducers/mobileNavReducer';
import mobileSubMenuReducer from './modules/reducers/NavigationReducers/subMenuReducer';
import redReducer from './modules/reducers/EducationComponentReducers/redReducer';
import collegeReducer from './modules/reducers/EducationComponentReducers/collegeReducer';
import universityReducer from './modules/reducers/EducationComponentReducers/universityReducer';
import devToolsReducer from '../redux/modules/reducers/ToolsComponentReducers/devToolsReducer';
import experienceReducer from '../redux/modules/reducers/ToolsComponentReducers/experienceReducer';
import languagesReducer from '../redux/modules/reducers/ToolsComponentReducers/languagesReducer';
import technologiesReducer from '../redux/modules/reducers/ToolsComponentReducers/technologiesReducer';
import booksComponentReducer from '../redux/modules/reducers/BooksComponentReducers/booksComponentReducer';
import bookComponentSectionsReducer from '../redux/modules/reducers/BooksComponentReducers/bookComponentSectionsReducer';
import projectsComponentReducer from '../redux/modules/reducers/ProjectsComponentReducers/projectsComponentReducer';
import projectsSliderReducer from '../redux/modules/reducers/ProjectsComponentReducers/projectsSliderReducer';

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
  devToolsComponentState: devToolsReducer,
  experienceComponentState: experienceReducer,
  languagesComponentState: languagesReducer,
  technologiesComponentState: technologiesReducer,
  booksComponentState: booksComponentReducer,
  bookSectionsState: bookComponentSectionsReducer,
  projectsComponentState: projectsComponentReducer,
  projectState: projectsSliderReducer,
});

export default combinedReducers;
