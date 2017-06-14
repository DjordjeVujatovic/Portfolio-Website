import {
  EXPAND_DEVTOOLS_COMPONENT,
  CLOSE_DEVTOOLS_COMPONENT,
} from '../../actions/ToolsComponentActions/devToolsComponentActions';

const initialState = {
  componentExpand: false,
  classState: 'devToolsComponentClose',
  buttonName: 'Development Tools',
  buttonClass: 'devToolsButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_DEVTOOLS_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'devToolsComponentOpen',
        buttonClass: 'devToolsButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_DEVTOOLS_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'devToolsComponentClose',
        buttonName: 'Development Tools',
        buttonClass: 'devToolsButtonClose',
      };
    default:
      return state;
  }
};
