// Action

export const EXPAND_LANGUAGE_COMPONENT = 'EXPAND_LANGUAGE_COMPONENT';
export const CLOSE_LANGUAGE_COMPONENT = 'CLOSE_LANGUAGE_COMPONENT';

// Action Creator

export const expandLanguageComponent = () => ({
  type: EXPAND_LANGUAGE_COMPONENT,
  payload: null,
});
export const closeLanguageComponent = () => ({
  type: CLOSE_LANGUAGE_COMPONENT,
  payload: null,
});
