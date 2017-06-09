import { GET_TOOLS } from '../actions/toolsActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TOOLS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
