// Action

export const EXPAND_SUB_MENU = 'EXPAND_SUB_MENU';

export const CLOSE_SUB_MENU = 'CLOSE_SUB_MENU';

// Action Creator

export const expandSubMenu = () => ({
  type: EXPAND_SUB_MENU,
  payload: null,
});

export const closeSubMenu = () => ({
  type: CLOSE_SUB_MENU,
  payload: null,
});
