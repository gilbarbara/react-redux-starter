import React from 'react';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../../utils/PureRender';

import { goTo } from '../../actions';
import NPMPackage from '../../../../package.json';

class Header extends React.Component {

	constructor(props) {
		super(props);
	}

	static contextTypes = {
		app: React.PropTypes.object,
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	@autobind
	onClickLink(e) {
		e.preventDefault();
		this.context.store.dispatch(goTo(e.currentTarget.dataset.destination));
	}

	render() {
		return (
			<header className="app__header">
				<div className="app__container">
					<h1>{NPMPackage.title}</h1>

					<div className="menu clearfix">

						<ul className="nav navbar-nav">
							<li className={this.context.app.location.pathname === '/home' ? 'active' : ''}>
								<a href="#" onClick={this.onClickLink} data-destination="/home">
									<span className="fa fa-home" />Home
							<li className={this.context.app.location.pathname === '/artists' ? 'active' : ''}>
								<a href="#" onClick={this.onClickLink} data-destination="/artists">
									<span className="fa fa-music" />Artists
								</a>
							</li>
							<li className={this.context.app.location.pathname === '/popular' ? 'active' : ''}>
								<a href="#" onClick={this.onClickLink} data-destination="/popular">
									<span className="fa fa-fire" />Popular</a>
							</li>
							<li className={this.context.app.location.pathname === '/lastweek' ? 'active' : ''}>
								<a href="#" onClick={this.onClickLink} data-destination="/lastweek">
									<span className="fa fa-calendar" />Last Week
								</a>
							</li>
						</ul>
					</div>
				</div>
				<a href="https://github.com/gilbarbara/react-redux" className="github-ribbon">
					<img src="/media/github-fork.png" />
				</a>
			</header>
		);
	}

}

export default Header;
