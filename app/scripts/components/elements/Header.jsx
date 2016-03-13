import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../../utils/PureRender';

import { goTo } from '../../actions';
import NPMPackage from '../../../../package.json';

export class Header extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    location: React.PropTypes.object.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  @autobind
  onClickLink(e) {
    e.preventDefault();
    this.props.dispatch(goTo(e.currentTarget.dataset.destination));
  }

  render() {
    return (
      <header className="app__header">
        <div className="app__container">
          <h1>{NPMPackage.title}</h1>

          <div className="menu clearfix">

            <ul className="nav navbar-nav">
              <li className={this.props.location.pathname === '/artists' ? 'active' : ''}>
                <a href="#" onClick={this.onClickLink} data-destination="/artists">
                  <span className="fa fa-music" />Artists
                </a>
              </li>
              <li className={this.props.location.pathname === '/popular' ? 'active' : ''}>
                <a href="#" onClick={this.onClickLink} data-destination="/popular">
                  <span className="fa fa-fire" />Popular
                </a>
              </li>
              <li className={this.props.location.pathname === '/lastweek' ? 'active' : ''}>
                <a href="#" onClick={this.onClickLink} data-destination="/lastweek">
                  <span className="fa fa-calendar" />Last Week
                </a>
              </li>
              <li className={this.props.location.pathname === '/about' ? 'active' : ''}>
                <a href="#" onClick={this.onClickLink} data-destination="/about">
                  <span className="fa fa-info-circle" />About
                </a>
              </li>
            </ul>
          </div>
        </div>
        <a href="https://github.com/gilbarbara/react-redux" className="github-ribbon">
          <img src="media/github-fork.png" />
        </a>
      </header>
    );
  }
}

function mapStateToProps() {
  return { };
}

export default connect(mapStateToProps)(Header);
