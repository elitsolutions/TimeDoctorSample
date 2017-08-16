import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Dashboard from './components/Dashboard';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>, 
  document.getElementById('app')
);