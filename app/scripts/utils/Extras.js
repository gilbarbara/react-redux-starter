/*eslint-disable require-jsdoc/require-jsdoc, no-console */
/**
 * Helper functions
 * @module Extras
 */

/**
 * Find differences between two objects.
 *
 * @function
 * @param {Array} a
 * @param {Array} b
 *
 * @returns {Array|boolean}
 */
export function diffArrays(a, b) {
	if (!Array.isArray(a) || !Array.isArray(b)) {
		console.warn('diffArrays only works with arrays');
		return false;
	}

	const result = [];

	a.forEach(idx => {
		if (b.indexOf(idx) === -1) {
			result.push(idx);
		}
	});

	b.forEach(idx => {
		if (a.indexOf(idx) === -1) {
			result.push(idx);
		}
	});

	return result;
}

/**
 * @function
 * @param {Object} obj
 *
 * @returns {boolean}
 */
export function isObject(obj) {
	return Boolean(obj) && typeof obj === 'object' && obj.length === undefined;
}

/**
 * Find differences between two objects.
 *
 * @function
 * @param {Object} a
 * @param {Object} b
 *
 * @returns {Object}
 */
export function diffObjects(a, b) {
	if (!isObject(a) || !isObject(b)) {
		console.warn('diffObjects only works with objects');
		return false;
	}
	const r = {};

	Object.keys(a).forEach(k => {
		const v = a[k];

		if (b[k] === v) {
			return;
		}

		r[k] = v;

		if (isObject(v)) {
			r[k] = diffObjects(v, b[k]);
		}
		else if (Array.isArray(v) && Array.isArray(b[k])) {
			r[k] = diffArrays(v, b[k]);
		}
	});

	return r;
}

/**
 * Deep compare two objects or arrays.
 *
 * @function
 * @param {Object|Array} a
 * @param {Object|Array} b
 *
 * @returns {boolean}
 */
export function isEqual(a, b) {
	const bothArrays = Array.isArray(a) && Array.isArray(b);
	const bothObjects = isObject(a) && isObject(b);

	if (!bothArrays && !bothObjects) {
		console.warn('isEqual only works with inputs with the same type. Objects or arrays.');
		return false;
	}

	if (bothArrays) {
		return diffArrays(a, b).length === 0;
	}

	return Object.keys(diffObjects(a, b)).length === 0;
}

/**
 * Convert object to querystring.
 *
 * @function
 * @param {Object} data
 *
 * @returns {string}
 */
export function param(data) {
	/**
	 * @param {Object} obj
	 * @param {Array} topLevel
	 * @param {string} keyProp
	 * @returns {string}
     */
	function stringify(obj, topLevel, keyProp) {
		let string = '';

		for (const key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (keyProp && topLevel[keyProp] && topLevel[keyProp].indexOf(obj[key]) !== 0) {
					string += keyProp;
				}
				if (topLevel[key]) {
					string += key;
				}
				else {
					string += '[' + key + ']';
				}

				if (obj[key] instanceof Array) {
					string += stringify(obj[key], topLevel, key);
				}
				else if (obj[key] instanceof Object) {
					string += stringify(obj[key], topLevel);
				}
				else {
					string += '=' + obj[key];
					string += '&';
				}
			}
		}
		return string;
	}

	const string = stringify(data, data);

	return encodeURI(string.substring(0, string.length - 1).split(' ').join('+'));
}

/**
 * Convert querystring to object.
 *
 * @function
 * @param {string} params
 * @param {boolean} [coerce]
 *
 * @returns {Object}
 */
export function deparam(params, coerce) {
	const obj = {};
	const coerceTypes = { true: !0, false: !1, null: null };

	let shouldCoerce = coerce;

	if (typeof params !== 'string') {
		return obj;
	}
	if (typeof coerce === 'undefined') {
		shouldCoerce = false;
	}

	// Iterate over all name=value pairs.
	params.replace(/\+/g, ' ').split('&').forEach((element) => {
		const parameter = element.split('=');
		let key = decodeURIComponent(parameter[0]);
		let cur = obj;
		let i = 0;
		let val;
		let keys = key.split(']['); // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it into its component parts.
		let keysLast = keys.length - 1;

		// If the first keys part contains [ and the last ends with ], then []
		// are correctly balanced.
		if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLast])) {
			// Remove the trailing ] from the last keys part.
			keys[keysLast] = keys[keysLast].replace(/\]$/, '');

			// Split first keys part into two parts on the [ and add them back onto
			// the beginning of the keys array.
			keys = keys.shift().split('[').concat(keys);

			keysLast = keys.length - 1;
		}
		else {
			// Basic 'foo' style key.
			keysLast = 0;
		}

		// Are we dealing with a name=value pair, or just a name?
		if (parameter.length === 2) {
			val = decodeURIComponent(parameter[1]);

			// Coerce values.
			if (shouldCoerce) {
				if (val && !isNaN(val)) {
					val = Number(val);
				}
				else if (val === 'undefined') {
					val = undefined;
				}
				else if (coerceTypes[val] !== undefined) {
					val = coerceTypes[val];
				}
			}

			if (keysLast) {
				// Complex key, build deep object structure based on a few rules:
				// * The 'cur' pointer starts at the object top-level.
				// * [] = array push (n is set to array length), [n] = array if n is
				//   numeric, otherwise object.
				// * If at the last keys part, set the value.
				// * For each keys part, if the current level is undefined create an
				//   object or array based on the type of the next keys part.
				// * Move the 'cur' pointer to the next level.
				// * Rinse & repeat.
				for (; i <= keysLast; i++) {
					key = keys[i] === '' ? cur.length : keys[i];
					cur = cur[key] = i < keysLast
						? cur[key] || (keys[i + 1] && isNaN(keys[i + 1]) ? {} : [])
						: val;
				}
			}
			else if (Array.isArray(obj[key])) {
				// val is already an array, so push on the next value.
				obj[key].push(val);
			}
			else if (obj[key] !== undefined) {
				// val isn't an array, but since a second value has been specified,
				// convert val into an array.
				obj[key] = [obj[key], val];
			}
			else {
				// val is a scalar.
				obj[key] = val;
			}
		}
		else if (key) {
			// No value was defined, so set something meaningful.
			obj[key] = shouldCoerce ? undefined : '';
		}
	});

	return obj;
}
