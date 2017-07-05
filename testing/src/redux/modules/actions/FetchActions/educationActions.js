// Action

export const GET_EDUCATION = 'GET_EDUCATION';
export const LOADING_EDUCATION = 'LOADING_EDUCATION';
export const DONE_LOADING_EDUCATION = 'DONE_LOADING_EDUCATION';


// Action Creator

export const getEducation = data => ({
  type: GET_EDUCATION,
  payload: data,
});

export const loadingEducation = () => ({
  type: LOADING_EDUCATION,
  payload: null,
});

export const doneLoadingEducation = () => ({
  type: DONE_LOADING_EDUCATION,
  payload: null,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/education.json';

export const fetchEducation = () => (dispatch) => {
  dispatch(loadingEducation());
  fetch(endpoint)
    .then(response => response.json())
    .then((data) => {
      dispatch(getEducation(data));
      dispatch(doneLoadingEducation());
    })
    .catch(error => console.log('Error fetching JSON', error));
};
