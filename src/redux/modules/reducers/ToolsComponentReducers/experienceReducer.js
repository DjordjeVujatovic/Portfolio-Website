import {
  EXPAND_EXPERIENCE_COMPONENT,
  CLOSE_EXPERIENCE_COMPONENT,
} from '../../actions/ToolsComponentActions/experienceComponentActions';

const initialState = {
  componentExpand: false,
  classState: 'experienceComponentClose',
  buttonName: 'Experience With',
  buttonClass: 'experienceButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_EXPERIENCE_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'experienceComponentOpen',
        buttonClass: 'experienceButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_EXPERIENCE_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'experienceComponentClose',
        buttonName: 'Experience With',
        buttonClass: 'experienceButtonClose',
      };
    default:
      return state;
  }
};
