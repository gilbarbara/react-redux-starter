import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';

const middlewares = [thunk, apiMiddleware];
export default configureMockStore(middlewares);
