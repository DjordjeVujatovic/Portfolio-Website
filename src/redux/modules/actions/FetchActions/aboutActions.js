// Action
export const LOADING_ABOUT = 'LOADING_ABOUT';
export const DONE_LOADING_ABOUT = 'DONE_LOADING_ABOUT';
export const GET_ABOUT = 'GET_ABOUT';

// Action Creator

export const getAbout = data => ({
  type: GET_ABOUT,
  payload: data,
});

export const loadingAbout = () => ({
  type: LOADING_ABOUT,
  payload: null,
});
export const doneLoadingAbout = () => ({
  type: DONE_LOADING_ABOUT,
  payload: null,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/about.json';

export const fetchAbout = () => (dispatch) => {
  dispatch(loadingAbout());
  fetch(endpoint)
    .then(response => response.json())
    .then((data) => {
      dispatch(getAbout(data));
      dispatch(doneLoadingAbout());
    })
    .catch(error => console.log('Error fetching JSON', error));
};
