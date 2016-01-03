import { CALL_API } from 'redux-api-middleware';
import { pushPath } from 'redux-simple-router';

import config from '../config';
import { ActionTypes } from '../constants';

/**
 * @module Actions
 * @desc Actions
 */

/**
 * Fetch Popular
 * @instance
 * @param {String} [query]
 *
 * @returns {Object}
 */
export let fetchPopular = (query) => {
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
 * Fetch LastWeek
 * @instance
 * @param {String} [query]
 *
 * @returns {Object}
 */
export let fetchLastWeek = (query) => {
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
 * Change route path
 * @instance
 * @param {String} destination - Route's Name
 * @param {Object} [params] - Route's Params
 * @param {String} [query] - Route's Query
 *
 * @returns {Object}
 */
export let goTo = (destination, params, query) => {
	return pushPath(destination + (params ? `/${params}` : '') + (query ? `?${query}` : ''));
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
		status,
		message: ''
	};
};
