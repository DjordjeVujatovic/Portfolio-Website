import { GET_BOOKS } from '../actions/booksActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
