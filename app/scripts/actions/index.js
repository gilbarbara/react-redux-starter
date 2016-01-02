import HypeApi from '../api/HypemApi';
import { pushPath } from 'redux-simple-router';
import { ActionTypes, XHR } from '../constants';

/**
 * @module Actions
 * @desc Actions
 */

/**
 * Fetch Stories' IDs
 * @instance
 * @param {String} [query]
 *
 * @returns {Function}
 */
export let fetchFeatured = (query) => {
	return (dispatch, getState) => {
		HypeApi.fetchFeatured(query)
			.then(response => {
				dispatch({
					type: ActionTypes.FEATURED_SUCCESS,
					status: response.status,
					data: response.data
				});
			})
		.catch(err => {
			console.log('error', err);
			dispatch({
				type: ActionTypes.FEATURED_FAIL
			});
		});
	};
};

/**
 * Change route path
 * @instance
 * @param {String} destination - Route's Name
 * @param {Object} [params] - Route's Params
 * @param {String} [query] - Route's Query
 *
 * @returns {Object}
 */
export let goTo = (destination, params, query) => {
	return pushPath(destination);
};

/**
 * Show a message
 * @instance
 * @param {String} status - Message type: success, warning, error, info
 * @param {String} message
 * @param {Boolean} withTimeout - Should close after a while?
 *
 * @returns {Object}
 */
export let showAlert = (status, message, withTimeout = true) => {
	return {
		type: ActionTypes.SHOW_ALERT,
		status,
		message,
		withTimeout
	};
};

export default { fetchFeatured, goTo, showAlert };
