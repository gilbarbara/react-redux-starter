import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createRoutes from '../routes';

let showDevTools;

if (process.env.NODE_ENV !== 'production') {
  const DevTools = require('../components/DevTools');
  showDevTools = <DevTools />;
}

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history} routes={createRoutes()} />
      {showDevTools}
    </div>
  </Provider>
);

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

export default Root;
