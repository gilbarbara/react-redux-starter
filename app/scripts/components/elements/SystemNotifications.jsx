import React from 'react';
import classNames from 'classnames';
import shouldComponentUpdate from '../../utils/PureRender';
import { autobind } from 'core-decorators';

import { hideAlert } from '../../actions';

let hideTimeout;

class SystemNotifications extends React.Component {
	constructor(props) {
		super(props);
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentWillMount() {
		this.setState(this.context.store.getState().browser);
	}

	componentDidMount() {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
	}

	componentDidUpdate() {
		if (this.state.visible && this.state.withTimeout) {
			window.clearTimeout(hideTimeout);

			hideTimeout = setTimeout(() => {
				this.hideNotification();
			}, 3500);
		}
	}

	componentWillUnmount() {
		this.storeUnsubscribe();
	}

	@autobind
	handleStoreChange() {
		const state = this.context.store.getState();

		if (state.browser.message !== this.state.message) {
			this.setState(state.browser);
		}
	}

	hideNotification() {
		this.context.store.dispatch(hideAlert(this.state.status));
	}

	@autobind
	onClick() {
		window.clearTimeout(hideTimeout);
		this.hideNotification();
	}

	render() {
		const STATE = this.state;

		/*		 state.visible = true;
		 state.status = 'info';
		 state.message = 'O seu resgate foi efetuado com sucesso';*/

		const classes = 'system-notifications' + (STATE.visible ? ' active' : '') + (STATE.status ? ' ' + STATE.status : '');

		return (
			<div ref="systemNotification" className={classes} onClick={this.onClick}>
				<i className={classNames('fa', {
					'fa-thumbs-up': STATE.status === 'success',
					'fa-exclamation-circle': STATE.status === 'warning',
					'fa-info-circle': STATE.status === 'info',
					'fa-thumbs-down': STATE.status === 'error'
				})} />

				<div>{STATE.message}</div>
			</div>
		);
	}
}

export default SystemNotifications;
