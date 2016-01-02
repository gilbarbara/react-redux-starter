import NPMPackage from '../../package.json';

export default {
	apiUrl: 'https://api.hypem.com/v2/',
	items: [
		{ react: NPMPackage.dependencies.react.replace(/~|\^/, '') },
		{ redux: NPMPackage.dependencies.redux.replace(/~|\^/, '') },
		{ 'react-router': NPMPackage.dependencies['react-router'].replace(/~|\^/, '') }
	]
};
