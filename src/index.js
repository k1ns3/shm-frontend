import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './scss/style.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <Switch>
          <App />
        </Switch>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
