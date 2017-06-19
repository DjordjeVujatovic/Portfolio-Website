// Action

export const EXPAND_PROJECTS_COMPONENT = 'EXPAND_PROJECTS_COMPONENT';
export const CLOSE_PROJECTS_COMPONENT = 'CLOSE_PROJECTS_COMPONENT';

// Action Creator

export const expandProjectsComponent = () => ({
  type: EXPAND_PROJECTS_COMPONENT,
  payload: null,
});
export const closeProjectsComponent = () => ({
  type: CLOSE_PROJECTS_COMPONENT,
  payload: null,
});
