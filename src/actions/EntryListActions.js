import axios from 'axios';
import * as types from '../constants/ActionTypes';

const API_URL = 'http://localhost:3000';

export function fetchEntry() {
  return (dispatch) => {
    axios.get(`${API_URL}/entry`)
    .then(response => dispatch({
      type: types.FETCH_ENTRY_SUCCESS,
      entry: response.data,
    }))
    .catch(response => dispatch({
      type: types.FETCH_ENTRY_FAILURE,
      error: response,
    }));
  };
}

export function newEntry(entry) {
  return (dispatch) => {
    axios.post(`${API_URL}/entry`, entry)
    .then(() => dispatch({
      type: types.NEW_ENTRY_SUCCESS,
      entry,
    }))
    .catch(response => dispatch({
      type: types.NEW_ENTRY_FAILURE,
      error: response.error,
    }));
  };
}

export function entryPlan(plan) {
  console.log('entryPlan===action===', plan);
  return {
    type: types.ENTRY_PLAN,
    plan,
  };
}

export function saveGratitude(entry) {
  return (dispatch) => {
    axios.post(`${API_URL}/entry`, entry)
    .then(() => dispatch({
      type: types.NEW_GRATITUDE_SUCCESS,
      entry,
    }))
    .catch(response => dispatch({
      type: types.NEW_GRATITUDE_FAILURE,
      error: response.error,
    }));
  };
}
