// Action

export const EXPAND_DEVTOOLS_COMPONENT = 'EXPAND_DEVTOOLS_COMPONENT';
export const CLOSE_DEVTOOLS_COMPONENT = 'CLOSE_DEVTOOLS_COMPONENT';

// Action Creator

export const expandDevToolsComponent = () => ({
  type: EXPAND_DEVTOOLS_COMPONENT,
  payload: null,
});
export const closeDevToolsComponent = () => ({
  type: CLOSE_DEVTOOLS_COMPONENT,
  payload: null,
});
