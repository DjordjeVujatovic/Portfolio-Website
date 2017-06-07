// Action

export const GET_ABOUT = 'GET_ABOUT';


// Action Creator

export const getAbout = data => ({
  type: GET_ABOUT,
  payload: data,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/about.json';

export const fetchAbout = () => (dispatch) => {
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getAbout(data));
      })
      .catch(error => console.log('Error fetching JSON', error));
};
