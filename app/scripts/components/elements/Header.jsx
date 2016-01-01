import React from 'react';
import shouldComponentUpdate from '../../utils/PureRender';
import { autobind } from 'core-decorators';

import Actions from '../../actions/AppActions';
import BrowserStore from '../../stores/BrowserStore';
import NPMPackage from '../../../../package.json';

class Header extends React.Component {

	constructor (props) {
		super(props);
	}

	static contextTypes = {
		location: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	@autobind
	onClickLink (e) {
		e.preventDefault();
		Actions.goTo(e.currentTarget.dataset.destination);
	}

	render () {
		return (
			<header className="app__header">
				<div className="app__container">
					<h1>{NPMPackage.title}</h1>

					<div className="menu clearfix">

						<ul className="nav navbar-nav">
							<li className={this.context.location.pathname === '/home' ? 'active' : ''}
								onClick={this.onClickLink} data-destination="/home">
								<a href="#"><span
									className="fa fa-home" />Home
								</a>
							</li>
							<li className={['/', '/stories'].indexOf(this.context.location.pathname) > -1 ? 'active' : ''}
								href="#" onClick={this.onClickLink} data-destination="/stories">
								<a href="#">
									<span
										className="fa fa-fire" />Hacker News</a>
							</li>
						</ul>
					</div>
				</div>
			</header>
		);
	}

}

export default Header;
