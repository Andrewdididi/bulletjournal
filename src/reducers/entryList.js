import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  entries: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_FETCH_ENTRY:
      return { ...state, isLoading: true };
    case types.FETCH_ENTRY_SUCCESS:
      return { ...state, isLoading: false, entries: [...action.entry] };
    case types.FETCH_ENTRY_FAILURE:
      return action.error;
    case types.ENTRY_ITEM_CHANGE:
      return { ...state, entries: action.entries };
    case types.NEW_ENTRY_SUCCESS:
      return { ...state, entries: action.entries };
    case types.NEW_ENTRY_FAILURE:
      return action.error;
    default:
      return state;
  }
}
