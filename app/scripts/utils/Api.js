import { XHR } from '../constants';
import Storage from '../utils/Storage';

/**
 * @module Api
 * @desc Interface to fetch
 */
export default {
	/**
	 * @param {String} url
	 * @returns {Promise}
	 */
	request (url) {
		return fetch(url)
			.then(response => {
				if (response.status >= 400 && response.status !== 404) {
					let error = new Error(response.statusText);
					error.response = response;
					throw error;
				}
				else {
					return response;
				}
			})
			.then(response => {
				return response.json()
					.then(data => {
						return { status: response.status, headers: response.headers, data };
					})
					.catch(error => {
						console.log(error);
					});
			})
			.then(data => {
				return data;
			}).catch(error => {
				console.log('request failed', error);
			});
	}
};
