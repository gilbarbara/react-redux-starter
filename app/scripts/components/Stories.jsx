import React from 'react';
import reactUpdate from 'react-addons-update';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import AppActions from '../actions/AppActions';
import { ActionTypes, XHR } from '../constants/AppConstants';
import HNStore from '../stores/HNStore.js';
import Loader from './elements/Loader';

class Stories extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			ready: false,
			error: undefined,
			start: undefined,
			max: 20,
			storiesIds: [],
			stories: []
		};
	}

	shouldComponentUpdate = shouldComponentUpdate;

	componentDidMount () {
		HNStore.addChangeListener(this.handleHNChange);
		AppActions.fetchStories();
	}

	componentDidUpdate (prevProps, prevState) {
		if (prevState.start !== this.state.start) {
			this.loadStories();
		}
	}

	componentWillUnmount () {
		HNStore.removeChangeListener(this.handleHNChange);
	}

	@autobind
	handleHNChange (action) {
		let response,
			state = {};

		if (action === ActionTypes.FETCH_STORIES) {
			response = HNStore.fetchStoriesResponse();
			if (response.status === XHR.SUCCESS) {
				state.storiesIds = response.data;
				state.start = 0;
			}
			else {
				state.error = response.data.message;
			}
		}
		else if (action === ActionTypes.FETCH_STORY) {
			response = HNStore.fetchStoryResponse();

			if (response.status === XHR.SUCCESS) {
				state = reactUpdate(this.state, {
						stories: { $push: [response.data] }
					}
				);
			}
			else {
				state.error = response.data.message;
			}
		}

		this.setState(state, () => {
			if (!this.state.ready && this.state.stories.length === (this.state.start + this.state.max)) {
				this.setState({
					ready: true
				});
			}
		});
	}

	loadStories () {
		this.state.storiesIds.slice(this.state.start, (this.state.start + this.state.max)).forEach((d) => {
			AppActions.fetchStory(d);
		});
	}

	@autobind
	onClickLoadMore (e) {
		e.preventDefault();

		this.setState({
			start: this.state.start + this.state.max
		});
	}

	render () {
		let output = {};

		if (this.state.ready) {
			output.html = this.state.stories.map((d) => {
				return (
					<a key={d.id} href={d.url} target="_blank" className="stories__item">
						<span className="title">{d.title}</span>
						<span className="score">{d.score}</span>
					</a>
				);
			});

			output.actions = (
				<div className="app__actions">
					<a href="#" className="load-more btn btn-primary btn-lg" onClick={this.onClickLoadMore}> Load More</a>
				</div>
			);
		}
		else {
			output.html = <Loader />;
		}

		return (
			<div key="Stories" className="stories-app">
				<h1>Hacker News</h1>

				<div className="stories">{output.html}</div>
				{output.actions}
			</div>
		);
	}
}

export default Stories;
