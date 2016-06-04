import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import nock from 'nock';

import * as Actions from 'actions/index';
import { ActionTypes } from 'constants/index';

const middlewares = [thunk, apiMiddleware];
const createMockStore = configureMockStore(middlewares);

describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it(`should dispatch ${ActionTypes.POPULAR_SUCCESS} when fetching popular has been done`, (done) => {
    nock('https://api.hypem.com')
      .get('/v2/popular')
      .reply(200, { payload: 'OK!' });

    const expectedActions = [
      { type: ActionTypes.POPULAR_REQUEST, payload: undefined, meta: undefined },
      { type: ActionTypes.POPULAR_SUCCESS, payload: { payload: 'OK!' }, meta: undefined }
    ];

    const store = createMockStore({});
    store.dispatch(Actions.fetchPopular())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it(`should dispatch ${ActionTypes.LASTWEEK_SUCCESS} when fetching popular has been done`, (done) => {
    nock('https://api.hypem.com')
      .get('/v2/popular?mode=lastweek')
      .reply(200, { payload: 'OK!' });

    const expectedActions = [
      { type: ActionTypes.LASTWEEK_REQUEST, payload: undefined, meta: undefined },
      { type: ActionTypes.LASTWEEK_SUCCESS, payload: { payload: 'OK!' }, meta: undefined }
    ];

    const store = createMockStore({});
    store.dispatch(Actions.fetchLastWeek()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
