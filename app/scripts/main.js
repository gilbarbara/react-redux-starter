import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from './reducers';

import routes from './routes';

const middleware = process.env.NODE_ENV === 'production' ?
	[ thunkMiddleware ] :
	[ thunkMiddleware, createLogger() ];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
	routing: routeReducer
}));

const store = createStoreWithMiddleware(reducer);

syncReduxAndRouter(browserHistory, store);

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Router history={browserHistory} routes={routes} />
		</Provider>,
		document.getElementById('react'));
});
