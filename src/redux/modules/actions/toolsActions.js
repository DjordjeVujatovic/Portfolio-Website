// Action

export const GET_TOOLS = 'GET_TOOLS';


// Action Creator

export const getTools = data => ({
  type: GET_TOOLS,
  payload: data,
});

// Thunk
const endpoint = 'https://personal-website-5164c.firebaseio.com/tools.json';

export const fetchAbout = () => (dispatch) => {
  fetch(endpoint)
      .then(response => response.json())
      .then((data) => {
        dispatch(getTools(data));
      })
      .catch(error => console.log('Error fetching JSON', error));
};
