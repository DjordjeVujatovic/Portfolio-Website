import { GET_TOOLS, LOADING_TOOLS, DONE_LOADING_TOOLS } from '../actions/toolsActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TOOLS:
      return { ...state, isLoading: true };
    case DONE_LOADING_TOOLS:
      return { ...state, isLoading: false };
    case GET_TOOLS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
