import { READ_MORE, CLOSE_READ_MORE } from '../../actions/ProjectsComponentActions/readMoreActions';

const intialState = {
  readMore: false,
};

export default (state = intialState, action) => { //eslint-disable-line
  switch (action.type) {
    case READ_MORE:
      return { ...state, readMore: true };
    case CLOSE_READ_MORE:
      return { ...state, readMore: false };
    default:
      return state;
  }
};
