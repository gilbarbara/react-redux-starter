import { applyMiddleware, createStore, combineReducers } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';

const reducer = combineReducers(Object.assign({}, rootReducer, {
	routing: routeReducer
}));

export default (history, initialState) => {
	const createStoreWithMiddleware = applyMiddleware(thunk, syncHistory(history), apiMiddleware)(createStore);

	return createStoreWithMiddleware(reducer, initialState);
};
