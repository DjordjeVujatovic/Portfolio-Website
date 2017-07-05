import {
  EXPAND_PROJECTS_COMPONENT,
  CLOSE_PROJECTS_COMPONENT,
} from '../../actions/ProjectsComponentActions/projectsComponentAction';

const initialState = {
  componentExpand: false,
  classState: 'projectsClose',
  buttonName: 'Open Projects',
  buttonClass: 'projectsButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_PROJECTS_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'projectsOpen',
        buttonClass: 'projectsButtonOpen',
        buttonName: 'Close Projects',
      };
    case CLOSE_PROJECTS_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'projectsClose',
        buttonName: 'Open Projects',
        buttonClass: 'projectsButtonClose',
      };
    default:
      return state;
  }
};
