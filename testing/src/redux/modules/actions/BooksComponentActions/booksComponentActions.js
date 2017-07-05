// Action

export const EXPAND_BOOKS_COMPONENT = 'EXPAND_BOOKS_COMPONENT';
export const CLOSE_BOOKS_COMPONENT = 'CLOSE_BOOKS_COMPONENT';

// Action Creator

export const expandBooksComponent = () => ({
  type: EXPAND_BOOKS_COMPONENT,
  payload: null,
});
export const closeBooksComponent = () => ({
  type: CLOSE_BOOKS_COMPONENT,
  payload: null,
});
