import * as types from '../constants/ActionTypes';

const initialState = {
  isLoading: false,
  entries: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_FETCH_ENTRY:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case types.FETCH_ENTRY_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        entries: [...action.entry],
      });
    case types.FETCH_ENTRY_FAILURE:
      return action.error;
    case types.ENTRY_ITEM_CHANGE:
      return Object.assign({}, state, {
        entries: action.entries,
      });
      console.log('ENTRY_ITEM_CHANGE==REDUCER==entryList===', entryList);
    default:
      return state;
  }
}
