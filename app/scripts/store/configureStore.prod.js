import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}));

export default (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(browserHistory), apiMiddleware)(createStore);

  return createStoreWithMiddleware(reducer, initialState);
};
