import { GET_EDUCATION } from '../actions/educationActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
