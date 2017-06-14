// Action

export const EXPAND_EXPERIENCE_COMPONENT = 'EXPAND_EXPERIENCE_COMPONENT';
export const CLOSE_EXPERIENCE_COMPONENT = 'CLOSE_EXPERIENCE_COMPONENT';

// Action Creator

export const expandExperienceComponent = () => ({
  type: EXPAND_EXPERIENCE_COMPONENT,
  payload: null,
});
export const closeExperienceComponent = () => ({
  type: CLOSE_EXPERIENCE_COMPONENT,
  payload: null,
});
