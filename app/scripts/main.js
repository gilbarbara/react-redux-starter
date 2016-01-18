import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import configStore from './store';
import routes from './routes';

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });
const store = configStore(hashHistory);

document.addEventListener('DOMContentLoaded', () => {
  let showDevTools;

  if (process.env.NODE_ENV !== 'production') {
    const DevTools = require('./components/DevTools');
    showDevTools = <DevTools />;
  }

  ReactDOM.render(
    <Provider store={store}>
      <div>
        <Router history={hashHistory} routes={routes} />
        {showDevTools}
      </div>
    </Provider>,
    document.getElementById('react'));
});
