import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

export default (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(thunk, routerMiddleware(browserHistory), apiMiddleware)(createStore);

  return createStoreWithMiddleware(rootReducer, initialState);
};
