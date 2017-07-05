// Action

export const EXPAND_COLLEGE_COMPONENT = 'EXPAND_COLLEGE_COMPONENT';
export const CLOSE_COLLEGE_COMPONENT = 'CLOSE_COLLEGE_COMPONENT';

// Action Creator

export const expandCollegeComponent = () => ({
  type: EXPAND_COLLEGE_COMPONENT,
  payload: null,
});
export const closeCollegeComponent = () => ({
  type: CLOSE_COLLEGE_COMPONENT,
  payload: null,
});
