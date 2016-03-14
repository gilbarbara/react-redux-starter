import shallowEqual from 'fbjs/lib/shallowEqual';

/**
 * @module PureRender
 * @description shouldComponentUpdate with context
 * @requires shallowEqual
 *
 * @param {Object} instance
 * @param {Object} nextProps
 * @param {Object} nextState
 * @param {Object} nextContext
 *
 * @returns {boolean}
 */
export default (instance, nextProps, nextState, nextContext) =>
  (!shallowEqual(instance.props, nextProps)
    || !shallowEqual(instance.state, nextState)
    || !shallowEqual(instance.context, nextContext)
  );
