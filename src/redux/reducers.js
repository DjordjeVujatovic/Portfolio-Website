import { combineReducers } from 'redux';
import aboutReducer from './modules/reducers/FetchReducers/aboutReducer';
import booksReducer from './modules/reducers/FetchReducers/booksReducer';
import educationReducer from './modules/reducers/FetchReducers/educationReducer';
import toolsReducer from './modules/reducers/FetchReducers/toolsReducer';
import projectReducer from './modules/reducers/FetchReducers/projectReducer';
import mobileNavReducer from './modules/reducers/NavigationReducers/mobileNavReducer';
import redReducer from './modules/reducers/EducationComponentReducers/redReducer';
import collegeReducer from './modules/reducers/EducationComponentReducers/collegeReducer';
import universityReducer from './modules/reducers/EducationComponentReducers/universityReducer';
import devToolsReducer from './modules/reducers/ToolsComponentReducers/devToolsReducer';
import experienceReducer from './modules/reducers/ToolsComponentReducers/experienceReducer';
import languagesReducer from './modules/reducers/ToolsComponentReducers/languagesReducer';
import technologiesReducer from './modules/reducers/ToolsComponentReducers/technologiesReducer';
import booksComponentReducer from './modules/reducers/BooksComponentReducers/booksComponentReducer';
import bookComponentSectionsReducer from './modules/reducers/BooksComponentReducers/bookComponentSectionsReducer';
import projectsComponentReducer from './modules/reducers/ProjectsComponentReducers/projectsComponentReducer';
import projectsSliderReducer from './modules/reducers/ProjectsComponentReducers/projectsSliderReducer';

const combinedReducers = combineReducers({
  about: aboutReducer,
  books: booksReducer,
  education: educationReducer,
  tools: toolsReducer,
  projects: projectReducer,
  mobileNav: mobileNavReducer,
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
