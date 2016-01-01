import NPMPackage from '../../package.json';

export default {
	items: [
		{ react: NPMPackage.dependencies.react.replace(/~|\^/, '') },
		{ 'react-router': NPMPackage.dependencies['react-router'].replace(/~|\^/, '') },
		{ flux: NPMPackage.dependencies.flux.replace(/~|\^/, '') }
	]
};
