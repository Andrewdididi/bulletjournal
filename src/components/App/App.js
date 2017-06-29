import React from 'react';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../../reducers';
import EventList from '../../containers/EventList/EventList';
import Navbar from '../../containers/Navbar/Navbar';
import Day from '../Day/Day';

require('./app.scss');

const middleware = [thunk, logger];
const store = createStore(
  reducer,
  applyMiddleware(...middleware));

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Navbar />
      <div className="app-container">
        <h1 className="title">Bullet Journal</h1>
        <EventList />
      </div>
    </div>
  </Provider>
);

export default App;
