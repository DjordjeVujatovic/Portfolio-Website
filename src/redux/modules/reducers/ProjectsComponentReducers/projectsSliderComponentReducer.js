import { NEXT_SLIDE, PREVIOUS_SLIDE } from '../../actions/ProjectsComponentActions/projectsSliderComponentActions';

const intialState = {
  slideCount: 1,
};

export const projectsSliderReducer = (state = intialState, action) => { //eslint-disable-line
  switch (action.type) {
    case NEXT_SLIDE:
      if (state.slideCount >= 5) {
        return { ...state, slideCount: state.slideCount - 4 };
      } return { ...state, slideCount: state.slideCount + 1 };
    case PREVIOUS_SLIDE:
      if (state.slideCount <= 1) {
        return { ...state, slideCount: state.slideCount + 4 };
      } return { ...state, slideCount: state.slideCount - 1 };
    default:
      return state;
  }
};
