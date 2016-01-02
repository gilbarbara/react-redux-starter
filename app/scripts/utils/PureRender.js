import shallowEqual from 'fbjs/lib/shallowEqual';

/**
 * @module PureRender
 * @desc shouldComponentUpdate with context
 * @requires shallowEqual
 *
 * @param {Object} instance
 * @param {Object} nextProps
 * @param {Object} nextState
 * @param {Object} nextContext
 *
 * @returns {Boolean}
 */
export default (instance, nextProps, nextState, nextContext) => {
	return !shallowEqual(instance.props, nextProps)
		|| !shallowEqual(instance.state, nextState)
		|| !shallowEqual(instance.context, nextContext);
};
