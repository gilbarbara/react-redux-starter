import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
// import diffLogger from 'redux-diff-logger';

import rootReducer from '../reducers';
import DevTools from '../components/DevTools';

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routeReducer
}));

export default (history, initialState) => {
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, reduxRouterMiddleware, apiMiddleware, createLogger()), // , diffLogger
    DevTools.instrument()
  )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  reduxRouterMiddleware.listenForReplays(store);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
};
