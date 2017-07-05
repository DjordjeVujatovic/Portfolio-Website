// Action

export const EXPAND_RED_COMPONENT = 'EXPAND_RED_COMPONENT';
export const CLOSE_RED_COMPONENT = 'CLOSE_RED_COMPONENT';

// Action Creator

export const expandRedComponent = () => ({
  type: EXPAND_RED_COMPONENT,
  payload: null,
});
export const closeRedComponent = () => ({
  type: CLOSE_RED_COMPONENT,
  payload: null,
});
