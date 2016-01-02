import { CALL_API } from 'redux-api-middleware';
import { pushPath } from 'redux-simple-router';

import config from '../config';
import { ActionTypes, XHR } from '../constants';

/**
 * @module Actions
 * @desc Actions
 */

/**
 * Request Featured
 * @instance
 * @param {String} [query]
 *
 * @returns {Object}
 */
let requestFeatured = (query) => {
	return {
		type: ActionTypes.FEATURED_REQUEST,
		query
	};
};

/**
 * Fetch Featured
 * @instance
 * @param {String} [query]
 *
 * @returns {Object}
 */
export let fetchFeatured = (query) => {
	return {
		[CALL_API]: {
			endpoint: config.apiUrl + 'tracks?sort=loved' + (query ? `&${query}` : ''),
			method: 'GET',
			types: [
				'FEATURED_REQUEST',
				'FEATURED_SUCCESS',
				'FEATURED_FAILURE'
			]
		}
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

/**
 * Hide message
 * @instance
 *
 * @returns {Object}
 */
export let hideAlert = (status = 'info') => {
	return {
		type: ActionTypes.HIDE_ALERT,
		status
	};
};
