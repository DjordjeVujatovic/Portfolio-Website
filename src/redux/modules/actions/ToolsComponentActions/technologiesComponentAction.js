// Action

export const EXPAND_TECHNOLOGIES_COMPONENT = 'EXPAND_TECHNOLOGIES_COMPONENT';
export const CLOSE_TECHNOLOGIES_COMPONENT = 'CLOSE_TECHNOLOGIES_COMPONENT';

// Action Creator

export const expandTechnologiesComponent = () => ({
  type: EXPAND_TECHNOLOGIES_COMPONENT,
  payload: null,
});
export const closeTechnologiesComponent = () => ({
  type: CLOSE_TECHNOLOGIES_COMPONENT,
  payload: null,
});
