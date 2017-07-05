// Action

export const GET_TOOLS = 'GET_TOOLS';
export const LOADING_TOOLS = 'LOADING_TOOLS';
export const DONE_LOADING_TOOLS = 'DONE_LOADING_TOOLS';


// Action Creator

export const getTools = data => ({
  type: GET_TOOLS,
  payload: data,
});

export const loadingTools = () => ({
  type: LOADING_TOOLS,
  payload: null,
});

export const doneLoadingTools = () => ({
  type: DONE_LOADING_TOOLS,
  payload: null,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/tools.json';

export const fetchTools = () => (dispatch) => {
  dispatch(loadingTools());
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getTools(data));
        dispatch(doneLoadingTools());
      })
      .catch(error => console.log('Error fetching JSON', error));
};
