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
 * @function
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function fetchPopular(query) {
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
}

/**
 * Fetch last week tracks.
 *
 * @function
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function fetchLastWeek(query) {
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
}

/**
 * Change route path.
 *
 * @function
 * @param {string} destination
 * @param {Object} [params]
 * @param {string} [query]
 *
 * @returns {Object}
 */
export function goTo(destination:boolean, params, query) {
	return pushPath(destination + (params ? `/${params}` : '') + (query ? `?${query}` : ''));
}

/**
 * Show a message.
 *
 * @function
 * @param {string} status - Message type: success, warning, error, info.
 * @param {string} message
 * @param {boolean} withTimeout - Should close after a while.
 *
 * @returns {Object}
 */
export function showAlert(status, message, withTimeout = true) {
	return {
		type: ActionTypes.SHOW_ALERT,
		status,
		message,
		withTimeout
	};
}

/**
 * Hide message.
 *
 * @function
 * @param {string} [status]
 *
 * @returns {Object}
 */
export function hideAlert(status = 'info') {
	return {
		type: ActionTypes.HIDE_ALERT,
		status,
		message: ''
	};
}
