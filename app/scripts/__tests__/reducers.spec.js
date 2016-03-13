import expect from 'expect';

import reducers from '../reducers';
import { browserState } from '../reducers/browser';
import { artistsState, popularState, lastweekState } from '../reducers/hypeMachine';
import * as Actions from '../actions';
import { ActionTypes } from '../constants';

describe('Reducers', () => {
  context('browser', () => {
    it('should return the initial state', () => {
      expect(reducers.browser(undefined, {}))
        .toEqual(browserState);
    });

    it(`should handle ${ActionTypes.SHOW_ALERT}`, () => {
      expect(reducers.browser(undefined, Actions.showAlert('success', 'hello')))
        .toEqual({
          status: 'success',
          message: 'hello',
          visible: true,
          withTimeout: true
        });
    });

    it(`should handle ${ActionTypes.HIDE_ALERT}`, () => {
      expect(reducers.browser(undefined, Actions.hideAlert()))
        .toEqual(browserState);
    });
  });

  context('popular', () => {
    it('should return the initial state', () => {
      expect(reducers.popular(undefined, {}))
        .toEqual(popularState);
    });

    it(`should handle ${ActionTypes.POPULAR_REQUEST}`, () => {
      expect(reducers.popular({}, {
        type: ActionTypes.POPULAR_REQUEST
      }))
        .toEqual({ running: true });
    });

    it(`should handle ${ActionTypes.POPULAR_REQUEST} with errors`, () => {
      expect(reducers.popular({}, {
        type: ActionTypes.POPULAR_REQUEST,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', running: true });
    });

    it(`should handle ${ActionTypes.POPULAR_SUCCESS}`, () => {
      expect(reducers.popular(popularState, {
        type: ActionTypes.POPULAR_SUCCESS,
        payload: [{ a: 1 }]
      }))
        .toEqual({ items: [{ a: 1 }], page: 2, ready: true, running: false });
    });

    it(`should handle ${ActionTypes.POPULAR_FAILURE}`, () => {
      expect(reducers.popular({ items: [] }, {
        type: ActionTypes.POPULAR_FAILURE,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', items: [], running: false });
    });
  });
  
  context('artists', () => {
    it('should return the initial state', () => {
      expect(reducers.artists(undefined, {}))
        .toEqual(artistsState);
    });

    it(`should handle ${ActionTypes.ARTISTS_REQUEST}`, () => {
      expect(reducers.artists({}, {
        type: ActionTypes.ARTISTS_REQUEST
      }))
        .toEqual({ running: true });
    });

    it(`should handle ${ActionTypes.ARTISTS_REQUEST} with errors`, () => {
      expect(reducers.artists({}, {
        type: ActionTypes.ARTISTS_REQUEST,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', running: true });
    });

    it(`should handle ${ActionTypes.ARTISTS_SUCCESS}`, () => {
      expect(reducers.artists(artistsState, {
        type: ActionTypes.ARTISTS_SUCCESS,
        payload: [{ a: 1 }]
      }))
        .toEqual({ items: [{ a: 1 }], count: 10, ready: true, running: false });
    });

    it(`should handle ${ActionTypes.ARTISTS_FAILURE}`, () => {
      expect(reducers.artists({ items: [] }, {
        type: ActionTypes.ARTISTS_FAILURE,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', items: [], running: false });
    });
  });

  context('lastweek', () => {
    it('should return the initial state', () => {
      expect(reducers.lastweek(undefined, {}))
        .toEqual(lastweekState);
    });

    it(`should handle ${ActionTypes.LASTWEEK_REQUEST}`, () => {
      expect(reducers.lastweek({}, {
        type: ActionTypes.LASTWEEK_REQUEST
      }))
        .toEqual({ running: true });
    });

    it(`should handle ${ActionTypes.LASTWEEK_REQUEST} with errors`, () => {
      expect(reducers.lastweek({}, {
        type: ActionTypes.LASTWEEK_REQUEST,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', running: true });
    });

    it(`should handle ${ActionTypes.LASTWEEK_SUCCESS}`, () => {
      expect(reducers.lastweek({ items: [], page: 1, ready: false }, {
        type: ActionTypes.LASTWEEK_SUCCESS,
        payload: [{ a: 1 }]
      }))
        .toEqual({ items: [{ a: 1 }], page: 2, ready: true, running: false });
    });

    it(`should handle ${ActionTypes.LASTWEEK_FAILURE}`, () => {
      expect(reducers.lastweek({ items: [] }, {
        type: ActionTypes.LASTWEEK_FAILURE,
        error: true,
        payload: {
          message: 'failed'
        }
      }))
        .toEqual({ error: true, message: 'failed', items: [], running: false });
    });
  });
});
