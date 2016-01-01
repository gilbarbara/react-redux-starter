import Dispatcher from '../utils/Dispatcher';
import HNApi from '../api/HNApi';
import { ActionTypes } from '../constants/AppConstants';

/**
 * @module Actions
 * @desc Flux Actions
 */
export default {
	/**
	 * Change route path
	 * @instance
	 * @param {String} destination - Route's Name
	 * @param {Object} [params] - Route's Params
	 * @param {String} [query] - Route's Query
	 */
	goTo (destination, params, query) {
		Dispatcher.handleViewAction({
			type: ActionTypes.NAVIGATE,
			destination,
			params,
			query
		});
	},

	/**
	 * Show a message
	 * @instance
	 * @param {String} status - Message type: success, warning, error, info
	 * @param {String} message
	 * @param {Boolean} withTimeout - Should close after a while?
	 */
	showAlert (status, message, withTimeout) {
		Dispatcher.handleViewAction({
			type: ActionTypes.SHOW_ALERT,
			status,
			message,
			withTimeout
		});
	},

	/**
	 * Fetch Stories' IDs
	 * @instance
	 */
	fetchStories () {
		HNApi.fetchAll();
	},

	/**
	 * Server response for a stories request
	 * @instance
	 * @param {String} status - Request Status ( success, fail )
	 * @param {Object} data - xhr
	 */
	storiesLoaded (status, data) {
		Dispatcher.handleViewAction({
			type: ActionTypes.FETCH_STORIES,
			status,
			data
		});
	},

	/**
	 * Fetch Story
	 * @instance
	 * @param {String} id - Story ID
	 */
	fetchStory (id) {
		HNApi.fetchOne(id);
	},

	/**
	 * Server response for a story request
	 * @instance
	 * @param {String} status - Request Status ( success, fail )
	 * @param {Object} data - xhr
	 */
	storyLoaded (status, data) {
		Dispatcher.handleViewAction({
			type: ActionTypes.FETCH_STORY,
			status,
			data
		});
	}
};
