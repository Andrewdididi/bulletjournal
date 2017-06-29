import { combineReducers } from 'redux';
import entryList from './entryList';

const rootReducer = combineReducers({
  entryList,
});

export default rootReducer;
