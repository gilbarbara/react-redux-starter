import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './store';
import routes from './routes';

import '../styles/main.scss';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
  let showDevTools;

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./components/DevTools');
    showDevTools = <DevTools />;
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        {showDevTools}
      </div>
    </Provider>,
    document.getElementById('react'));
});
