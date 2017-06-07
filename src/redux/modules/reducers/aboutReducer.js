import { GET_ABOUT } from '../actions/aboutActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
