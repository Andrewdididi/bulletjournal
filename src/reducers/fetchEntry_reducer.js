import * as types from '../constants/ActionTypes';

const objDate = Date.now();

const strDate =
    objDate.toLocaleString("en", { day: "numeric" }) + ' ' +
    objDate.toLocaleString("en", { month: "long"  }) + ' ' +
    objDate.toLocaleString("en", { year: "numeric"});

const initialState = [ {date: strDate, entries: [{ text: 'New To Do' }] }];

export default function (state = [], action) {
  switch (action.type) {
    case types.FETCH_ENTRY_SUCCESS:
      return action.entry;
    case types.FETCH_ENTRY_FAILURE:
      return action.error;
    default:
      return state;
  }
}
