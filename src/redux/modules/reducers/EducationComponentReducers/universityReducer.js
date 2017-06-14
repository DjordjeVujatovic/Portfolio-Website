import {
  EXPAND_UNIVERSITY_COMPONENT,
  CLOSE_UNIVERSITY_COMPONENT,
} from '../../actions/educationActions';

const initialState = {
  componentExpand: false,
  classState: 'universityClose',
  buttonName: 'University',
  buttonClass: 'universityButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_UNIVERSITY_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'universityOpen',
        buttonClass: 'universityButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_UNIVERSITY_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'universityClose',
        buttonName: 'University',
        buttonClass: 'universityButtonClose',
      };
    default:
      return state;
  }
};
