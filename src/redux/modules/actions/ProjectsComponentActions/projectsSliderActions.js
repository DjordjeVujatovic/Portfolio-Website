// Actions

export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';

// Action Creators

export const nextSlide = () => ({
  type: NEXT_SLIDE,
  payload: null,
});

export const previousSlide = () => ({
  type: PREVIOUS_SLIDE,
  payload: null,
});

