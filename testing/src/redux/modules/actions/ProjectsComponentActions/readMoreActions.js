// Actions

export const READ_MORE = 'READ_MORE';
export const CLOSE_READ_MORE = 'CLOSE_READ_MORE';

// Action Creators

export const readMore = () => ({
  type: READ_MORE,
  payload: null,
});

export const closeReadMore = () => ({
  type: CLOSE_READ_MORE,
  payload: null,
});

