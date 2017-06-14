import {
  EXPAND_RED_COMPONENT,
  CLOSE_RED_COMPONENT,
  EXPAND_COLLEGE_COMPONENT,
  CLOSE_COLLEGE_COMPONENT,
  EXPAND_UNIVERSITY_COMPONENT,
  CLOSE_UNIVERSITY_COMPONENT,
} from '../../actions/EducationComponentActions/redComponentActions';

const initialState = {
  componentExpand: false,
  classState: 'redClose',
  buttonClass: 'redButtonClose',
  buttonName: 'redAcademy',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_RED_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'redOpen',
        buttonClass: 'redButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_RED_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'redClose',
        buttonClass: 'redButtonClose',
        buttonName: 'redAcademy',
      };
    default:
      return state;
  }
};
