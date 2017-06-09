import { GET_BOOKS, LOADING_BOOKS, DONE_LOADING_BOOKS } from '../actions/booksActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_BOOKS:
      return { ...state, isLoading: true };
    case DONE_LOADING_BOOKS:
      return { ...state, isLoading: false };
    case GET_BOOKS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
