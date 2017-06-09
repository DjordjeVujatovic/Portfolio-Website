import { GET_ABOUT, LOADING_ABOUT, DONE_LOADING_ABOUT } from '../actions/aboutActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ABOUT:
      return { ...state, isLoading: true };
    case DONE_LOADING_ABOUT:
      return { ...state, isLoading: false };
    case GET_ABOUT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
