import React from 'react';
import reactUpdate from 'react-addons-update';
import { autobind } from 'core-decorators';

import shouldComponentUpdate from '../utils/PureRender';
import { fetchFeatured, showAlert } from '../actions';
import { ActionTypes, XHR } from '../constants';
import Loader from './elements/Loader';

class Featured extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			ready: false,
			error: undefined,
			finished: false,
			page: 1,
			featured: []
		};
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentDidMount () {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
		this.context.store.dispatch(fetchFeatured(this.state.page > 1 ? 'page=' + this.state.page : ''));
	}

	componentWillUnmount () {
		this.storeUnsubscribe();
	}

	@autobind
	handleStoreChange () {
		let state = this.context.store.getState();

		if (state.HM) {
			let hm = state.HM;

			this.setState({
				featured: [
					...this.state.featured,
					...hm.featured
				],
				page: ++this.state.page,
				ready: this.state.ready || hm.featured.length,
				finished: !hm.featured.length,
				error: hm.error
			});
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
		let output = {};

		if (this.state.ready) {
			output.html = this.state.featured.map((d, i) => {
				return (
					<div key={i} className="featured">
						<div className="featured__image">
							<img src={d.thumb_url_large} />
						</div>
						<div className="featured__info">
							<h2><a href={'http://hypem.com/track/' + d.itemid} target="_blank">{d.artist} - {d.title}</a></h2>
							{d.description}
						</div>
					</div>
				);
			});

			if (!this.state.finished) {
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
