// Action

export const GET_BOOKS = 'GET_BOOKS';
export const LOADING_BOOKS = 'LOADING_BOOKS';
export const DONE_LOADING_BOOKS = 'DONE_LOADING_BOOKS';


// Action Creator

export const getBooks = data => ({
  type: GET_BOOKS,
  payload: data,
});

export const loadingBooks = () => ({
  type: LOADING_BOOKS,
  payload: null,
});

export const doneLoadingBooks = () => ({
  type: DONE_LOADING_BOOKS,
  payload: null,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/books.json';

export const fetchBooks = () => (dispatch) => {
  dispatch(loadingBooks());
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getBooks(data));
        dispatch(doneLoadingBooks());
      })
      .catch(error => console.log('Error fetching JSON', error));
};
