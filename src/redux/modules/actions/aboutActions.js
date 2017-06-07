// Action

export const GET_ABOUT = 'GET_ABOUT';


// Action Creator

export const getAbout = data => ({
  type: GET_ABOUT,
  payload: data,
});

// Thunk

export const fetchAbout = () => dispatch => fetch('https://personal-website-5164c.firebaseio.com/about')
    .then((response) => {
      response.json();
    })
    .then((result) => {
      dispatch(getAbout(result));
    });
