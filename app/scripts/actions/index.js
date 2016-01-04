import { CALL_API } from 'redux-api-middleware';
import { pushPath } from 'redux-simple-router';

import config from '../config';
import { ActionTypes } from '../constants';

/**
 * @module Actions
 * @desc Actions
 */

/**
 * Fetch popular tracks.
 *
 * @instance
 * @param {string} [query]
 *
 * @returns {Object}
 */
export const fetchPopular = (query) => {
	return {
		[CALL_API]: {
			endpoint: config.apiUrl + 'popular' + (query ? `?${query}` : ''),
			method: 'GET',
			types: [
				'POPULAR_REQUEST',
				'POPULAR_SUCCESS',
				'POPULAR_FAILURE'
			]
		}
	};
};

/**
 * Fetch last week tracks.
 *
 * @instance
 * @param {string} [query]
 *
 * @returns {Object}
 */
export const fetchLastWeek = (query) => {
	return {
		[CALL_API]: {
			endpoint: config.apiUrl + 'popular?mode=lastweek' + (query ? `&${query}` : ''),
			method: 'GET',
			types: [
				'LASTWEEK_REQUEST',
				'LASTWEEK_SUCCESS',
				'LASTWEEK_FAILURE'
			]
		}
	};
};

/**
 * Change route path.
 *
 * @instance
 * @param {string} destination
 * @param {Object} [params]
 * @param {string} [query]
 *
 * @returns {Object}
 */
export const goTo = (destination, params, query) => {
	return pushPath(destination + (params ? `/${params}` : '') + (query ? `?${query}` : ''));
};

/**
 * Show a message.
 *
 * @instance
 * @param {string} status - Message type: success, warning, error, info.
 * @param {string} message
 * @param {boolean} withTimeout - Should close after a while.
 *
 * @returns {Object}
 */
export const showAlert = (status, message, withTimeout = true) => {
	return {
		type: ActionTypes.SHOW_ALERT,
		status,
		message,
		withTimeout
	};
};

/**
 * Hide message.
 *
 * @instance
 * @param {string} [status]
 *
 * @returns {Object}
 */
export const hideAlert = (status = 'info') => {
	return {
		type: ActionTypes.HIDE_ALERT,
		status,
		message: ''
	};
};
