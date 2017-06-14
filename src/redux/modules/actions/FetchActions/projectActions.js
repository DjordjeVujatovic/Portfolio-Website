// Action

export const GET_PROJECTS = 'GET_PROJECTS';
export const LOADING_PROJECTS = 'LOADING_PROJECTS';
export const DONE_LOADING_PROJECTS = 'DONE_LOADING_PROJECTS';


// Action Creator

export const getProjects = data => ({
  type: GET_PROJECTS,
  payload: data,
});

export const loadingProjects = () => ({
  type: LOADING_PROJECTS,
  payload: null,
});

export const doneLoadingProjects = () => ({
  type: DONE_LOADING_PROJECTS,
  payload: null,
});

// Thunk

const endpoint = 'https://personal-website-5164c.firebaseio.com/projects.json';

export const fetchProjects = () => (dispatch) => {
  dispatch(loadingProjects());
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getProjects(data));
        dispatch(doneLoadingProjects());
      })
      .catch(error => console.log('Error fetching JSON', error));
};

