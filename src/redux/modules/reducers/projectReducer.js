import { GET_PROJECTS } from '../actions/projectActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
