import expect from 'expect';
import deepFreeze from 'deep-freeze';

import reducers from '../reducers';
import { browserState } from '../reducers/browser';
import { hypeMachineState } from '../reducers/hypeMachine';
import * as Actions from '../actions';
import { ActionTypes } from '../constants';

describe('Reducers', () => {

	context('browser', () => {
		it(`should return the initial state`, () => {
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

	context('hypeMachine', () => {
		it(`should return the initial state`, () => {
			expect(reducers.hypeMachine(undefined, {}))
				.toEqual(hypeMachineState);
		});

		it(`should handle ${ActionTypes.POPULAR_REQUEST}`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.POPULAR_REQUEST
			}))
				.toEqual({});
		});

		it(`should handle ${ActionTypes.POPULAR_REQUEST} with errors`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.POPULAR_REQUEST,
				error: true,
				payload: {
					message: 'failed'
				}
			}))
				.toEqual({ popular: { error: true, message: 'failed' } });
		});

		it(`should handle ${ActionTypes.POPULAR_SUCCESS}`, () => {
			expect(reducers.hypeMachine({ popular: { items: [], page: 1, ready: false } }, {
				type: ActionTypes.POPULAR_SUCCESS,
				payload: [{ a: 1 }]
			}))
				.toEqual({ popular: { items: [ { a: 1 }], page: 2, ready: true } });
		});

		it(`should handle ${ActionTypes.POPULAR_FAILURE}`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.POPULAR_FAILURE,
				error: true,
				payload: {
					message: 'failed'
				}
			}))
				.toEqual({ popular: { error: true, message: 'failed' } });
		});

		it(`should handle ${ActionTypes.LASTWEEK_REQUEST}`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.LASTWEEK_REQUEST
			}))
				.toEqual({});
		});

		it(`should handle ${ActionTypes.LASTWEEK_REQUEST} with errors`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.LASTWEEK_REQUEST,
				error: true,
				payload: {
					message: 'failed'
				}
			}))
				.toEqual({ lastweek: { error: true, message: 'failed' } });
		});

		it(`should handle ${ActionTypes.LASTWEEK_SUCCESS}`, () => {
			expect(reducers.hypeMachine({ lastweek: { items: [], page: 1, ready: false } }, {
				type: ActionTypes.LASTWEEK_SUCCESS,
				payload: [{ a: 1 }]
			}))
				.toEqual({ lastweek: { items: [ { a: 1 } ], page: 2, ready: true } });
		});

		it(`should handle ${ActionTypes.LASTWEEK_FAILURE}`, () => {
			expect(reducers.hypeMachine({}, {
				type: ActionTypes.LASTWEEK_FAILURE,
				error: true,
				payload: {
					message: 'failed'
				}
			}))
				.toEqual({ lastweek: { error: true, message: 'failed' } });
		});

	});
});
