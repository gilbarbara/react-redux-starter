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
	FETCH_STORIES: undefined,
	FETCH_STORY: undefined,
	NAVIGATE: undefined,
	SHOW_ALERT: undefined
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
