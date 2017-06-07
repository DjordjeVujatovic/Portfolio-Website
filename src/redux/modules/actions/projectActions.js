// Action

export const GET_PROJECTS = 'GET_PROJECTS';


// Action Creator

export const getProjects = data => ({
  type: GET_PROJECTS,
  payload: data,
});

// Thunk

const endpoint = 'https://personal-website-5164c.firebaseio.com/projects.json';

export const fetchProjects = () => (dispatch) => {
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getProjects(data));
      })
      .catch(error => console.log('Error fetching JSON', error));
};

