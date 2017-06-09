import { GET_PROJECTS, LOADING_PROJECTS, DONE_LOADING_PROJECTS } from '../actions/projectActions';

const initialState = { isLoading: true };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PROJECTS:
      return { ...state, isLoading: true };
    case DONE_LOADING_PROJECTS:
      return { ...state, isLoading: false };
    case GET_PROJECTS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
