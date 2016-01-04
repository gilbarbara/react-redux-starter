import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncReduxAndRouter } from 'redux-simple-router';

import configStore from './store';
import routes from './routes';

const store = configStore();
syncReduxAndRouter(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
	let showDevTools;

	if (process.env.NODE_ENV !== 'production') {
		const DevTools = require('./components/DevTools');
		showDevTools = <DevTools/>;
	}

	ReactDOM.render(
		<Provider store={store}>
			<div>
				<Router history={browserHistory} routes={routes} />
				{showDevTools}
			</div>
		</Provider>,
		document.getElementById('react'));
});
