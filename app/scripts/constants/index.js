import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @namespace Constants
 * @desc Constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
	POPULAR_REQUEST: undefined,
	POPULAR_SUCCESS: undefined,
	POPULAR_FAILURE: undefined,
	LASTWEEK_REQUEST: undefined,
	LASTWEEK_SUCCESS: undefined,
	LASTWEEK_FAILURE: undefined,
	SHOW_ALERT: undefined,
	HIDE_ALERT: undefined
});

export default { ActionTypes };
