
import { NEXT_SLIDE, PREVIOUS_SLIDE } from '../../actions/ProjectsComponentActions/projectsSliderActions';
import { READ_MORE, CLOSE_READ_MORE } from '../../actions/ProjectsComponentActions/readMoreActions';

const intialState = {
  slideCount: 1,
  readMore: false,
};

export default (state = intialState, action) => { //eslint-disable-line
  switch (action.type) {
    case NEXT_SLIDE:
      if (state.slideCount >= 4) {
        return { ...state, slideCount: state.slideCount - 3, readMore: false };
      } return { ...state, slideCount: state.slideCount + 1, readMore: false };
    case PREVIOUS_SLIDE:
      if (state.slideCount <= 1) {
        return { ...state, slideCount: state.slideCount + 3, readMore: false };
      } return { ...state, slideCount: state.slideCount - 1, readMore: false };
    case READ_MORE:
      return { ...state, readMore: true };
    case CLOSE_READ_MORE:
      return { ...state, readMore: false };
    default:
      return state;
  }
};
