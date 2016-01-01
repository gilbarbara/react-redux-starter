import { ActionTypes } from '../constants/AppConstants';
import Store from '../utils/Store';
import StateHelper from '../utils/State';

const State = StateHelper.init({
	name: 'HMState',
	state: {
		storiesIds: undefined,
		story: undefined
	}
});

/**
 * @class
 * @desc Handle Hacker News data
 *
 * @extends Store
 * @requires Dispatcher
 * @requires State
 */
class HNStore extends Store {
	constructor () {
		super();

		State.clear();
	}

	process (payload) {
		let action = payload.action;

		switch (action.type) {

			case ActionTypes.FETCH_STORIES:
			{
				this.handleFetchStories(action);
				this.emitChange(ActionTypes.FETCH_STORIES);
				break;
			}

			case ActionTypes.FETCH_STORY:
			{
				this.handleFetchStory(action);
				this.emitChange(ActionTypes.FETCH_STORY);
				break;
			}

			default:
			{
				break;
			}
		}
	}

	handleFetchStories (action) {
		let state = State.get();
		state.storiesIds = action;
		State.set(state);
	}

	fetchStoriesResponse () {
		return State.get().storiesIds;
	}

	handleFetchStory (action) {
		let state = State.get();
		state.story = action;
		State.set(state);
	}

	fetchStoryResponse () {
		return State.get().story;
	}
}

export default new HNStore();
