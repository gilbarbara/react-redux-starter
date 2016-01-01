import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SandboxedModule from '../utils/SandboxedES2015';

chai.should();
chai.use(sinonChai);

function createFakeAppActionsRequires (options) {
	let defaultRequires = {
		'../api/HNApi': sinon.spy(),
		'../utils/Dispatcher': {
			handleViewAction: sinon.spy()
		},
		'../constants/AppConstants': require('../constants/AppConstants')
	};

	return Object.assign(defaultRequires, options);
}

describe('AppActions', () => {

	describe('goTo', () => {
		let AppActions, fakeDispatcher, expected;

		beforeEach(() => {
			expected = {
				type: 'NAVIGATE',
				destination: 'destination',
				params: 'params',
				query: 'query'
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../utils/Dispatcher': fakeDispatcher
				})
			});
		});

		it('should call AppDispatcher.handleViewAction with NAVIGATE action', () => {
			AppActions.goTo('destination', 'params', 'query');
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});
	});

	describe('showBrowserAlert', () => {
		let Actions, fakeDispatcher, expected;

		beforeEach(() => {
			expected = {
				type: 'SHOW_ALERT',
				status: 'info',
				message: 'message',
				withTimeout: true
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			Actions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../utils/Dispatcher': fakeDispatcher
				})
			});

		});

		it('should call Dispatcher.handleViewAction with SHOW_ALERT action', () => {
			Actions.showAlert('info', 'message', true);
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});

	});

	describe('fetchStories', () => {
		let AppActions, fakeDispatcher, HNApi;

		beforeEach(() => {

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			HNApi = {
				fetchAll: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../api/HNApi': HNApi,
					'../utils/Dispatcher': fakeDispatcher
				})
			});
		});

		it('should call HNApi.fetchAll', () => {
			AppActions.fetchStories();
			HNApi.fetchAll.should.be.called;
		});
	});

	describe('storiesLoaded', () => {
		let AppActions, fakeDispatcher, expected;

		beforeEach(() => {
			expected = {
				type: 'FETCH_STORIES',
				status: 'status',
				data: 'data'
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../utils/Dispatcher': fakeDispatcher
				})
			});

		});

		it('should call AppDispatcher.handleViewAction with FETCH_STORIES action', () => {
			AppActions.storiesLoaded('status', 'data');
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});

	});

	describe('fetchStory', () => {
		let AppActions, fakeDispatcher, HNApi;

		beforeEach(() => {

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			HNApi = {
				fetchOne: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../api/HNApi': HNApi,
					'../utils/Dispatcher': fakeDispatcher
				})
			});

		});

		it('should call HNApi.fetchOne', () => {
			AppActions.fetchStory();
			HNApi.fetchOne.should.be.called;
		});
	});

	describe('storyLoaded', () => {
		let AppActions, fakeDispatcher, expected;

		beforeEach(() => {
			expected = {
				type: 'FETCH_STORY',
				status: 'status',
				data: 'data'
			};

			fakeDispatcher = {
				handleViewAction: sinon.spy()
			};

			AppActions = SandboxedModule.require('../actions/AppActions', {
				requires: createFakeAppActionsRequires({
					'../utils/Dispatcher': fakeDispatcher
				})
			});

		});

		it('should call AppDispatcher.handleViewAction with FETCH_STORY action', () => {
			AppActions.storyLoaded('status', 'data');
			fakeDispatcher.handleViewAction.should.be.calledWith(expected);
		});
	});
});
