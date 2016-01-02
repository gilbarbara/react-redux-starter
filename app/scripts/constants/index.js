/**
 * @namespace Constants
 * @desc Flux Constants
 */

import keyMirror from 'fbjs/lib/keyMirror';

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
	FEATURED_REQUEST: undefined,
	FEATURED_SUCCESS: undefined,
	FEATURED_FAILURE: undefined,
	SHOW_ALERT: undefined,
	HIDE_ALERT: undefined
});

/**
 * @constant {Object} HXR
 * @memberof Constants
 */
export const XHR = keyMirror({
	SUCCESS: undefined,
	FAIL: undefined
});

export default { ActionTypes, XHR };
