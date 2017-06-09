// Action

export const GET_BOOKS = 'GET_BOOKS';


// Action Creator

export const getBooks = data => ({
  type: GET_BOOKS,
  payload: data,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/books.json';

export const fetchBooks = () => (dispatch) => {
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getBooks(data));
      })
      .catch(error => console.log('Error fetching JSON', error));
};
