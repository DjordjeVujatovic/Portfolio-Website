import {
  EXPAND_COLLEGE_COMPONENT,
  CLOSE_COLLEGE_COMPONENT,
} from '../../actions/educationActions';

const initialState = {
  componentExpand: false,
  classState: 'collegeClose',
  buttonName: 'College',
  buttonClass: 'collegeButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_COLLEGE_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'collegeOpen',
        buttonClass: 'collegeButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_COLLEGE_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'collegeClose',
        buttonName: 'College',
        buttonClass: 'collegeButtonClose',
      };
    default:
      return state;
  }
};
