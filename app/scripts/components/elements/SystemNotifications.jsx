import React from 'react';
import shouldComponentUpdate from '../../utils/PureRender';
import { autobind } from 'core-decorators';

import BrowserStore from '../../stores/BrowserStore';

let defaultState = {
		visible: false,
		message: '',
		status: '',
		withTimeout: false
	},
	hideTimeout;

class SystemNotifications extends React.Component {
	constructor (props) {
		super(props);

		this.state = defaultState;
	}

	shouldComponentUpdate = shouldComponentUpdate;

	componentDidMount () {
		BrowserStore.addChangeListener(this.handleChange);
	}

	componentDidUpdate () {
		if (this.state.withTimeout) {
			window.clearTimeout(hideTimeout);

			hideTimeout = setTimeout(() => {
				this.hideNotification();
			}, 2000);
		}
	}

	componentWillUnmount () {
		BrowserStore.removeChangeListener(this.handleChange);
	}

	@autobind
	handleChange () {
		let alert = BrowserStore.getAlertMessage();

		if (alert) {
			this.setState({
				visible: true,
				message: alert.message,
				status: alert.status,
				withTimeout: alert.withTimeout
			});
		}
	}

	hideNotification () {
		if (this.state.visible) {
			this.setState({
				visible: false
			});

			setTimeout(() => {
				this.setState(defaultState);
			}, 1000);
		}
	}

	@autobind
	onClick () {
		window.clearTimeout(hideTimeout);
		this.hideNotification();
	}

	render () {
		let state = this.state;

/*		 state.visible = true;
		 state.status = 'info';
		 state.message = 'O seu resgate foi efetuado com sucesso';*/

		let classes = 'system-notifications' + (this.state.visible ? ' active' : '') + (this.state.status ? ' ' + this.state.status : '');

		return (
			<div ref="systemNotification" className={classes} onClick={this.onClick}>
				<i className={'fa fa-' + ( state.status === 'success' ? 'thumbs-up' : (state.status === 'warning' ? 'exclamation-circle' : (state.status === 'info' ? 'info-circle' : 'times-circle')))} />

				<div>{this.state.message}</div>
			</div>
		);
	}
}

export default SystemNotifications;
