import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import browser from './browser';
import hypeMachine from './hypeMachine';

const rootReducer = combineReducers({
  ...browser,
  ...hypeMachine,
  routing: routerReducer
});

export default rootReducer;
