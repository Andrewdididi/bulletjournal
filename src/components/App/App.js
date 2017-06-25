import React from 'react';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../../reducers';
import EventList from '../../containers/EventList/EventList';
import Day from '../Day/Day';

require('./app.scss');

const middleware = [logger, thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware));

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <EventList />
      <h1 className="title">Bullet Journal</h1>
      <Day date="June 24th Saturday" />
      <Day date="June 25th Sunday" />
    </div>
  </Provider>
);

export default App;
