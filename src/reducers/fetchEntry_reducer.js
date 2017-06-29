import { FETCH_ENTRY_SUCCESS, FETCH_ENTRY_FAILURE } from '../actions/types';

const objDate = Date.now();

const strDate =
    objDate.toLocaleString("en", { day: "numeric" }) + ' ' +
    objDate.toLocaleString("en", { month: "long"  }) + ' ' +
    objDate.toLocaleString("en", { year: "numeric"});

const initialState = [ {date: strDate, entries: [{ text: 'New To Do' }] }];

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ENTRY_SUCCESS:
      return action.entry;
    case FETCH_ENTRY_FAILURE:
      return action.error;
    default:
      return state;
  }
}
