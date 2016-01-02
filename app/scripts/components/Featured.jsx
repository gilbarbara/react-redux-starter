import React from 'react';
import reactUpdate from 'react-addons-update';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchFeatured, showAlert } from '../actions';
import Loader from './elements/Loader';

class Featured extends React.Component {
	constructor (props) {
		super(props);
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentWillMount () {
		this.setState(this.context.store.getState().HM);
	}

	componentDidMount () {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);

		if (!this.state.error && this.state.page === 1) {
			this.context.store.dispatch(fetchFeatured());
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

		if (this.state.featured.length !== state.HM.featured.length) {
			newState = state.HM;
		}

		if (state.HM.error && !this.state.error) {
			newState = state.HM;
		}

		if (newState) {
			this.setState(newState);
		}
	}

	loadFeatured () {
		this.context.store.dispatch(fetchFeatured('page=' + this.state.page));
	}

	@autobind
	onClickLoadMore (e) {
		e.preventDefault();

		this.loadFeatured();
	}

	render () {
		const STATE = this.state;
		let output = {};

		if (STATE.ready) {
			output.html = STATE.featured.map((d, i) => {
				return (
					<div key={i} className="featured">
						<div className="featured__image">
							<img src={d.thumb_url_large} />
						</div>
						<div className="featured__info">
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
			<div key="Featured" className="featured-app">
				<h1>Hype Machine - Featured</h1>

				<div className="featured__wrapper">{output.html}</div>
				{output.actions}
			</div>
		);
	}
}

export default Featured;
