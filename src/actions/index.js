import axios from 'axios';

const FETCH_ENTRY_SUCESS = 'FETCH_ENTRY_SUCESS';
const FETCH_ENTRY_FAIL = 'FETCH_ENTRY_FAIL';
const ACTIVE_POST = 'ACTIVE_POST';
const NEW_ENTRY_SUCCESS = 'NEW_ENTRY_SUCCESS';
const NEW_ENTRY_FAIL = 'NEW_ENTRY_FAIL';

export function fetchEntry() {
  return (dispatch) => {
    axios.get('http://localhost:3000/post')
      .then(response => dispatch({
        type: FETCH_ENTRY_SUCESS,
        entry: response.data,
      }))
      .catch(response => dispatch({
        type: FETCH_ENTRY_FAIL,
        error: response.error,
      }));
  };
}

export function activePost(post) {
  return {
    type: ACTIVE_POST,
    post,
  };
}

export function newEntry(entry) {
  axios.post('http://localhost:3000/post', entry)
    .then(() => dispatch({
      type: NEW_ENTRY_SUCCESS,
      entry,
    }))
    .catch(response => dispatch({
      type: NEW_ENTRY_FAIL,
      error: response.error,
    }));
}
