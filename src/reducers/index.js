import { combineReducers } from 'redux';
import FetchEntry from './fetchEntry_reducer';

const rootReducer = combineReducers({
  entry: FetchEntry,
});

export default rootReducer;
