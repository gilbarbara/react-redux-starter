import * as babel from 'babel-core';
import SandboxedModule from 'sandboxed-module';

/**
 * @module SandboxedES2015
 * @desc Extends SandboxedModule to transform ES2015 code
 *
 * @requires sandboxed-module
 */
const SandboxedES2015 = {
	require: (moduleId, options) => {
		return SandboxedModule.require(moduleId, Object.assign({
			sourceTransformers: {
				babel: (source) => {
					source = babel.transform(source, {
						presets: ['es2015'],
						plugins: ['add-module-exports']
					}).code;

					return source;
				}
			}
		}, options));
	}
};

export default SandboxedES2015;
