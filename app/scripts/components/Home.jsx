import React from 'react';
import shouldComponentUpdate from '../utils/PureRender';
import config from '../config';
import Loader from './elements/Loader';

class Home extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			ready: false,
			items: []
		};
	}

	shouldComponentUpdate = shouldComponentUpdate;

	componentDidMount () {
		this.initialize();
	}

	initialize () {
		this.setState({
			ready: true,
			items: config.items
		});
	}

	render () {
		let html,
			items;

		items = this.state.items.map((item, i) => {
			const key = Object.keys(item);
			return (
				<div key={i} className="col-xs-12 col-sm-6 col-md-4">
					<div className="item">
						<h3>{key}</h3>
						{item[key]}
					</div>
				</div>
			);
		});

		if (this.state.ready) {
			html = (
				<div className="row">{items}</div>
			);
		}
		else {
			html = (<Loader />);
		}
		return (
			<div key="Home" className="home">{html}</div>
		);
	}
}

export default Home;
