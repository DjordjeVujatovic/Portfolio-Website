// Action

export const GET_EDUCATION = 'GET_EDUCATION';


// Action Creator

export const getEducation = data => ({
  type: GET_EDUCATION,
  payload: data,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/education.json';

export const fetchAbout = () => (dispatch) => {
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getEducation(data));
      })
      .catch(error => console.log('Error fetching JSON', error));
};
