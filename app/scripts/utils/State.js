import Storage from './Storage';

/**
 * @class
 * @classDesc Keep stores state between reloads
 * @exports State
 *
 * @requires Storage
 */
class State {
	/**
	 * @param {Object} opt
	 * @param {String} opt.name
	 * @param {Object} opt.state
	 * @param {Boolean} [opt.skipStorageData]
	 * @param {Boolean} [opt.forceUpdate]
     */
	constructor (opt) {
		if (!opt || !opt.name || !opt.state) {
			throw new Error('name and state argument is required');
		}

		let name  = opt.name,
			state = opt.state,
			tmp   = Storage.getItem(name);

		if (tmp && opt.skipStorageData) {
			return;
		}

		if (!tmp || opt.forceUpdate) {
			tmp = state;
			Storage.setItem(name, tmp);
		}

		this.orig = state;
		this.name = name;
	}

	/**
	 * Load state from storage
	 * @returns {Object}
     */
	get () {
		return Storage.getItem(this.name);
	}

	/**
	 * Save state in storage
	 * @param {Object} state
     */
	set (state) {
		Storage.setItem(this.name, state);
	}

	/**
	 * Cleanup state
	 */
	clear () {
		Storage.setItem(this.name, this.orig);
	}
}

export default {
	init (opt) {
		return new State(opt);
	}
};
