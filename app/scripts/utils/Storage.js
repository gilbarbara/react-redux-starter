/**
 * @module Storage
 * @desc Deals with LocalStorage
 */

export default {
	/**
	 * @param {String} name
	 * @returns {Object}
     */
	getItem (name) {
		return JSON.parse(localStorage.getItem(name));
	},

	/**
	 * @param {String} name
	 * @param {Object} value
     */
	setItem (name, value) {
		localStorage.setItem(name, JSON.stringify(value));
	},

	/**
	 * Remove item from localStorage
	 * @param {String} name
     */
	removeItem (name) {
		localStorage.removeItem(name);
	},

	/**
	 * Clear localStorage
	 */
	clearAll () {
		localStorage.clear();
	}
};
