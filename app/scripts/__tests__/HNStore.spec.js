import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import SandboxedModule from '../utils/SandboxedES2015';

let expect = chai.expect;
chai.should();
chai.use(sinonChai);

describe('HNStore', () => {
	let fakeStorage = {
		setItem (name, value) {
			this[name] = value;
		},
		getItem (name) {
			return this[name];
		},
		removeItem () {
			delete this[name];
		},
		clearAll: sinon.spy()
	};

	describe('process', () => {
		let fakePayload;

		describe('Given a type "FETCH_STORIES" ', () => {
			let HNStore;

			before(() => {
				fakePayload = {
					action: {
						type: 'FETCH_STORIES',
						status: 'success'
					}
				};

				HNStore = SandboxedModule.require('../stores/HNStore', {
					requires: {
						'../utils/Store' () {
							this.emitChange = () => {
							};
						},
						'../utils/State': SandboxedModule.require('../utils/State', {
							requires: {
								'../utils/Storage': fakeStorage
							}
						}),
						'../constants/AppConstants': require('../constants/AppConstants')
					}
				});

				sinon.stub(HNStore, 'emitChange');
			});

			after(() => {
				HNStore.emitChange.restore();
			});

			it('should create a fetchStories props with action data in state', () => {
				HNStore.process(fakePayload);
				expect(HNStore.fetchStoriesResponse()).to.be.deep.equal({
					type: 'FETCH_STORIES',
					status: 'success'
				});
				HNStore.emitChange.should.be.called;
			});

		});

		describe('Given a type "FETCH_STORY" ', () => {
			let HNStore;

			before(() => {
				fakePayload = {
					action: {
						type: 'FETCH_STORY',
						status: 'success'
					}
				};

				HNStore = SandboxedModule.require('../stores/HNStore', {
					requires: {
						'../utils/Store' () {
							this.emitChange = () => {
							};
						},
						'../utils/State': SandboxedModule.require('../utils/State', {
							requires: {
								'../utils/Storage': fakeStorage
							}
						}),
						'../constants/AppConstants': require('../constants/AppConstants')
					}
				});

				sinon.stub(HNStore, 'emitChange');
			});

			after(() => {
				HNStore.emitChange.restore();
			});

			it('should create a fetchTransactions props with action data in state', () => {
				HNStore.process(fakePayload);
				expect(HNStore.fetchStoryResponse()).to.be.deep.equal({
					type: 'FETCH_STORY',
					status: 'success'
				});
				HNStore.emitChange.should.be.called;
			});
		});
	});
});
