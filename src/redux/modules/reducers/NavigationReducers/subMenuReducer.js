import { EXPAND_SUB_MENU, CLOSE_SUB_MENU } from '../../actions/NavigationActions/mobileSubMenuActions';

const initialState = {
  subMenuExpand: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_SUB_MENU:
      return { ...state, subMenuExpand: true };
    case CLOSE_SUB_MENU:
      return { ...state, subMenuExpand: false };
    default:
      return state;
  }
};
