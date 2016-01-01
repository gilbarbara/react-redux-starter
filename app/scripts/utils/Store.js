import { EventEmitter } from 'events';

const change = 'CHANGE';

/**
 * @class
 * @desc Add methods to EventEmitter
 * @exports Store
 *
 * @requires EventEmitter
 */
class Store extends EventEmitter {
	constructor (props) {
		super(props);
	}

	/**
	 * Emit an event
	 * @param {String} action
     */
	emitChange (action) {
		super.emit(change, action);
	}

	/**
	 * Add an event listener
	 * @param {Function} cb
     */
	addChangeListener (cb) {
		super.on(change, cb);
	}

	/**
	 * Remove the event listener
	 * @param {Function} cb
	 */
	removeChangeListener (cb) {
		super.removeListener(change, cb);
	}
}

export default Store;
