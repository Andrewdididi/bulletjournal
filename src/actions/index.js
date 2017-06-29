import axios from 'axios';
import { FETCH_ENTRY_SUCCESS,
          FETCH_ENTRY_FAILURE,
        } from './types';

const API_URL = 'http://localhost:3000';

export function fetchEntry() {
  return (dispatch) => {
    axios.get(`${API_URL}/entry`)
    .then(response => dispatch({
      type: FETCH_ENTRY_SUCCESS,
      entry: response.data,
    }))
    .catch(response => dispatch({
      type: FETCH_ENTRY_FAILURE,
      error: response,
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
