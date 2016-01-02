import { featuredLoaded } from '../actions';
import config from '../config';
import Api from '../utils/Api';
import { XHR } from '../constants';

export default {
	fetchFeatured (query) {
		return Api.request(config.apiUrl + 'tracks?sort=loved' + (query ? `&${query}` : ''));
	}
};
