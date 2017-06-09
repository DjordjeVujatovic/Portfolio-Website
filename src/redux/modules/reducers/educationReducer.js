import { GET_EDUCATION, LOADING_EDUCATION, DONE_LOADING_EDUCATION } from '../actions/educationActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_EDUCATION:
      return { ...state, isLoading: true };
    case DONE_LOADING_EDUCATION:
      return { ...state, isLoading: false };
    case GET_EDUCATION:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
