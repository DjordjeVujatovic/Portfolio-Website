// Action

export const GET_PROJECTS = 'GET_PROJECTS';


// Action Creator

export const getProjects = data => ({
  type: GET_PROJECTS,
  payload: data,
});

// Thunk

export const fetchProjects = () => (dispatch) => {
  return fetch('https://personal-website-5164c.firebaseio.com/projects')
    .then((response) => {
      response.json();
    })
    .then((result) => {
      dispatch(getProjects(result));
    });
};
