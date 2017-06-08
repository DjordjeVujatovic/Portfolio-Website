// Action

export const EXPAND = 'EXPAND';

export const CLOSE_EXPAND = 'CLOSE_EXPAND';

// Action Creator

export const expand = () => ({
  type: EXPAND,
  payload: null,
});

export const closeExpand = () => ({
  type: CLOSE_EXPAND,
  payload: null,
});



