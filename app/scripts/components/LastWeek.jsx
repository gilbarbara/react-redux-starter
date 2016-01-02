import React from 'react';
import reactUpdate from 'react-addons-update';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchLastWeek, showAlert } from '../actions';
import Loader from './elements/Loader';

class LastWeek extends React.Component {
	constructor (props) {
		super(props);
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentWillMount () {
		this.setState(this.context.store.getState().HypeMachine.lastweek);
	}

	componentDidMount () {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);

		if (!this.state.error && this.state.page === 1) {
			this.context.store.dispatch(fetchLastWeek());
		}
	}

	componentDidUpdate (prevProps, prevState) {
		if (!prevState.error && this.state.error) {
			this.context.store.dispatch(showAlert('error', this.state.message, true));
		}
	}

	componentWillUnmount () {
		this.storeUnsubscribe();
	}

	@autobind
	handleStoreChange () {
		let state = this.context.store.getState(),
			newState;

		if (this.state.items.length !== state.HypeMachine.lastweek.items.length) {
			newState = state.HypeMachine.lastweek;
		}

		if (state.HypeMachine.lastweek.error && !this.state.error) {
			newState = state.HypeMachine.lastweek;
		}

		if (newState) {
			this.setState(newState);
		}
	}

	loadMore () {
		this.context.store.dispatch(fetchLastWeek('page=' + this.state.page));
	}

	@autobind
	onClickLoadMore (e) {
		e.preventDefault();

		this.loadMore();
	}

	render () {
		const STATE = this.state;
		let output = {};

		if (STATE.ready) {
			output.html = STATE.items.map((d, i) => {
				return (
					<div key={i} className="tracks">
						<div className="tracks__image">
							<img src={d.thumb_url_large} />
						</div>
						<div className="tracks__info">
							<h2><a href={'http://hypem.com/track/' + d.itemid}
								   target="_blank">{d.artist} - {d.title}</a></h2>
							{d.description}
						</div>
					</div>
				);
			});

			if (!STATE.error) {
				output.actions = (
					<div className="app__actions">
						<a href="#" className="load-more btn btn-primary btn-lg"
						   onClick={this.onClickLoadMore}> Load More</a>
					</div>
				);
			}
		}
		else {
			output.html = <Loader />;
		}

		return (
			<div key="Tracks" className="tracks-app">
				<h1>Hype Machine - Last Week</h1>

				<div className="tracks__wrapper">{output.html}</div>
				{output.actions}
			</div>
		);
	}
}

export default LastWeek;
