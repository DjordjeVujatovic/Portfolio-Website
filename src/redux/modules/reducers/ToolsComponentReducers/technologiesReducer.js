import {
  EXPAND_TECHNOLOGIES_COMPONENT,
  CLOSE_TECHNOLOGIES_COMPONENT,
} from '../../actions/ToolsComponentActions/technologiesComponentAction';

const initialState = {
  componentExpand: false,
  classState: 'technologiesComponentClose',
  buttonName: 'Technologies',
  buttonClass: 'technologiesButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_TECHNOLOGIES_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'technologiesComponentOpen',
        buttonClass: 'technologiesButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_TECHNOLOGIES_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'technologiesComponentClose',
        buttonName: 'Technologies',
        buttonClass: 'technologiesButtonClose',
      };
    default:
      return state;
  }
};
