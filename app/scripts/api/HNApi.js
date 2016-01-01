import Actions from '../actions/AppActions';
import Api from '../utils/Api';
import { XHR } from '../constants/AppConstants';

export default {
	url: 'https://hacker-news.firebaseio.com/v0',

	fetchAll () {
		Api.request(this.url + '/topstories.json?print=pretty')
			.then(response => {
				Actions.storiesLoaded(XHR.SUCCESS, response.data);
			});
	},

	fetchOne (id) {
		Api.request(this.url + '/item/' + id + '.json?print=pretty')
			.then(response => {
				Actions.storyLoaded(XHR.SUCCESS, response.data);
			});
	}
};
