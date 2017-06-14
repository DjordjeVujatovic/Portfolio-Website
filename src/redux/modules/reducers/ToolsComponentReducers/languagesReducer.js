import {
  EXPAND_LANGUAGE_COMPONENT,
  CLOSE_LANGUAGE_COMPONENT,
} from '../../actions/ToolsComponentActions/languageComponentActions';

const initialState = {
  componentExpand: false,
  classState: 'languageComponentClose',
  buttonName: 'Languages',
  buttonClass: 'languageButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_LANGUAGE_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'languageComponentOpen',
        buttonClass: 'languageButtonOpen',
        buttonName: 'Close',
      };
    case CLOSE_LANGUAGE_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'languageComponentClose',
        buttonName: 'Languages',
        buttonClass: 'languageButtonClose',
      };
    default:
      return state;
  }
};
