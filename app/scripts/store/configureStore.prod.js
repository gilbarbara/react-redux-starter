import { applyMiddleware, createStore, combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, apiMiddleware)(createStore);

const reducer = combineReducers(Object.assign({}, rootReducer, {
	routing: routeReducer
}));

export default (initialState) => {
	return createStoreWithMiddleware(reducer, initialState);
};
