import { EXPAND, CLOSE_EXPAND } from '../../actions/NavigationActions/mobileNavActions';

const initialState = {
  displayExpand: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND:
      return { ...state, displayExpand: true };
    case CLOSE_EXPAND:
      return { ...state, displayExpand: false };
    default:
      return state;
  }
};

