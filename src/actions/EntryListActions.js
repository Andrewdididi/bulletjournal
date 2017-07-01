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

export function entryItemChange({ entryID, sectionName, text, itemID }) {
  return (dispatch, getState) => {
    const { entryList } = getState();
    const updateList = entryList.entries.map((entry) => {
      if (entry._id === entryID) {
        entry[sectionName] = entry[sectionName].map(item =>
          item._id === itemID ? { ...item, text } : item
        );
      }
      return entry;
    });
    return dispatch({
      type: types.ENTRY_ITEM_CHANGE,
      entries: updateList,
    });
  };
}

export function saveUpdateEntry({ entryID, sectionName, text, itemID }) {
  return (dispatch, getState) => {
    let updateEntry; 
    const { entryList } = getState();
    const updateList = entryList.entries.map((entry) => {
      if (entry._id === entryID) {
        entry[sectionName] = entry[sectionName].map(item => {
          return item._id === itemID ? { ...item, text } : item
        });
        updateEntry = entry;
      }
      return entry;
    });

    axios.patch(`${API_URL}/entry/${entryID}`, updateEntry)
    .then(() => dispatch({
      type: types.NEW_ENTRY_SUCCESS,
      entries: updateList,
    }))
    .catch(response => dispatch({
      type: types.NEW_ENTRY_FAILURE,
      error: response,
    }));
  };
}

export function newEntryItem({ text, entryID, sectionName, entryType }) {
  return (dispatch, getState) => {
    let updateEntry;
    const { entryList } = getState();
    const updateList = entryList.entries.map((entry) => {
      if (entry._id === entryID) {
        entry[sectionName].push({ text });
        updateEntry = entry;
      }
      return entry;
    });

    axios.patch(`${API_URL}/entry/${entryID}`, updateEntry)
    .then(() => dispatch({
      type: types.NEW_ENTRY_SUCCESS,
      entries: updateList,
    }))
    .catch(response => dispatch({
      type: types.NEW_ENTRY_FAILURE,
      error: response,
    }));
  };
}
