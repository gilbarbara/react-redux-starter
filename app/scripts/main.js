import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import configStore from './store';

import '../styles/main.scss';

const store = configStore();
const history = syncHistoryWithStore(browserHistory, store);

function renderApp(RootComponent) {
  render(
    <AppContainer>
      <RootComponent store={store} history={history} />
    </AppContainer>,
    document.getElementById('react')
  );
}

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    './containers/Root',
    () => renderApp(require('./containers/Root'))
  );
}
