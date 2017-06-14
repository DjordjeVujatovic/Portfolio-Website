// Action

export const EXPAND_RED_COMPONENT = 'EXPAND_RED_COMPONENT';
export const CLOSE_RED_COMPONENT = 'CLOSE_RED_COMPONENT';

export const EXPAND_COLLEGE_COMPONENT = 'EXPAND_COLLEGE_COMPONENT';
export const CLOSE_COLLEGE_COMPONENT = 'CLOSE_COLLEGE_COMPONENT';

export const EXPAND_UNIVERSITY_COMPONENT = 'EXPAND_UNIVERSITY_COMPONENT';
export const CLOSE_UNIVERSITY_COMPONENT = 'CLOSE_UNIVERSITY_COMPONENT';
// Action Creator

export const expandRedComponent = () => ({
  type: EXPAND_RED_COMPONENT,
  payload: null,
});
export const closeRedComponent = () => ({
  type: CLOSE_RED_COMPONENT,
  payload: null,
});

export const expandCollegeComponent = () => ({
  type: EXPAND_COLLEGE_COMPONENT,
  payload: null,
});
export const closeCollegeComponent = () => ({
  type: CLOSE_COLLEGE_COMPONENT,
  payload: null,
});

export const expandUniversityComponent = () => ({
  type: EXPAND_UNIVERSITY_COMPONENT,
  payload: null,
});
export const closeUniversityComponent = () => ({
  type: CLOSE_UNIVERSITY_COMPONENT,
  payload: null,
});
