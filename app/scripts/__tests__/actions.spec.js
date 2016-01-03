import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import nock from 'nock';

//import SandboxedModule from '../utils/SandboxedES2015';
import * as Actions from '../actions';
import { ActionTypes } from '../constants';

const middlewares = [ thunk, apiMiddleware ];
const createMockStore = configureMockStore(middlewares);

describe('Actions', () => {
	describe('goTo', () => {
		it('should create an action to navigate with react-router > UPDATE_PATH', () => {
			expect([Actions.goTo('/destination', 'params', 'query=1')]).toInclude('/destination/params?query=1', (a, b) => a.payload.path === b);
		});
	});

	describe('showAlert', () => {
		it('should create an action to display an alert', () => {
			const expectedAction = {
				type: ActionTypes.SHOW_ALERT,
				status: 'success',
				message: 'Alright!',
				withTimeout: false
			};

			expect(Actions.showAlert('success', 'Alright!', false)).toEqual(expectedAction);
		});
	});

	describe('hideAlert', () => {
		it('should create an action to hide an alert', () => {
			const expectedAction = {
				type: ActionTypes.HIDE_ALERT,
				status: 'error',
				message: ''
			};

			expect(Actions.hideAlert('error')).toEqual(expectedAction);
		});
	});
});

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

		const store = createMockStore({ payload: 'OK!' }, expectedActions, done);
		store.dispatch(Actions.fetchPopular());
	});

	it(`should dispatch ${ActionTypes.LASTWEEK_SUCCESS} when fetching popular has been done`, (done) => {
		nock('https://api.hypem.com')
			.get('/v2/popular?mode=lastweek')
			.reply(200, { payload: 'OK!' });

		const expectedActions = [
			{ type: ActionTypes.LASTWEEK_REQUEST, payload: undefined, meta: undefined },
			{ type: ActionTypes.LASTWEEK_SUCCESS, payload: { payload: 'OK!' }, meta: undefined }
		];

		const store = createMockStore({ payload: 'OK!' }, expectedActions, done);
		store.dispatch(Actions.fetchLastWeek());
	});
});
